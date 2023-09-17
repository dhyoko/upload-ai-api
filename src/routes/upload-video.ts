import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { fastifyMultipart } from "@fastify/multipart";
import path from "node:path";
import { randomUUID } from "node:crypto";
import fs from 'node:fs';
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline);

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1_048_576*25,
    }
  })

  app.post('/video', async (req, reply) => {
    const data = await req.file();

    if(!data) {
      return reply.status(400).send({ error: "Missing file input."})
    }

    const extension = path.extname(data.filename);

    if (extension !== '.mp3') {
      return reply.status(400).send({ erro: 'Incorrect input format'})
    }

    const fileBaseName = path.basename(data.filename, extension)
    const fileUploadName = `${fileBaseName}-example-${randomUUID()}${extension}`
    const uploadDestination = path.resolve( __dirname, '../../temp', fileUploadName);
    await pump(data.file, fs.createWriteStream(uploadDestination))

    const video = await prisma.video.create({
      data: {
        name: data.fieldname,
        path: uploadDestination
      }
    })

    return {
      video,
    }
  })
}