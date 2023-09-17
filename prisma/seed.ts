import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Youtube Title',
      template: `Your role is to generate three titles for a YouTube video.

Below you will receive the transcription of those videos, use that transcription to generate those titles.
Below you will also receive a list of titles, use that list as reference for the titles that will be generated.

The titles should have a maximum length of 60 characters.
Titles must be catchy and attractive to maximize clicks.

Return ONLY the three titles formatted as a list like in the example below
'''
- Title 1
- Title 2
- Title 3
'''

Transcription
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Youtube Description',
      template: `Your role is to generate a succinct description for a YouTube video.
  
Below you will receive a transcript of this video, use this transcript to generate the description.

The description must have a maximum of 80 words in the first person containing the main points of the video.

Use eye-catching words that capture the attention of those reading.

Additionally, at the end of the description include a list of 3 to 10 hashtags in lowercase letters containing the video's keywords.

The return must follow the following format
'''
Description.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcription
'''
{transcription}
'''`.trim()
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

