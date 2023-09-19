![image](https://github.com/dhyoko/upload-ai-web/assets/42620936/209d7cba-2275-4b8e-8fc7-71abd9af7573)
![Next level week](https://blog.rocketseat.com.br/content/images/size/w2000/2022/04/nlw-next-level-week-blog-rocketseat.png)
# Rocketseat NLW IA #13 - upload.ai
<br/>
This project is a Node app that has APIs that can be used to generate a title and description for a YouTube video based on a video transcription!
<br/>
To develop this app, the following packages were used: 

* [Node](https://nodejs.org/en)
* [Prisma](https://www.prisma.io/)
* [Fastify](https://fastify.dev/)
* [Open AI](https://openai.com/)
* [Zod](https://zod.dev/)
* [Vercel AI SDK](https://sdk.vercel.ai/docs)
<br/>

This application's front-end service can be found [here](https://github.com/dhyoko/upload-ai-web).

<br/>

To run this project you will need:

> - Node 18
> - An [Open AI API key](https://openai.com/) and add it to the `.env` file as `OPEN_AI_API_KEY`
<br/>

To set up the database (for simplicity we used SQLite but feel free to set up any other database that you prefer), run: 

```shell script
npx prisma init --datasource-provider sqlite
```

<br/>
After installing the packages and setting up the database, simply run:

```shell script
npm run dev
```
<br/>

For manual testing, we used a plugin from `VS Code IDE` known as [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

The event page can be found in this [link](https://www.rocketseat.com.br/nlw).

