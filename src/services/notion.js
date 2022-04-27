import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.REACT_APP_NOTION_API_KEY,
    baseUrl: `${process.env.REACT_APP_PROXY_URL}https://api.notion.com`,
  })

export const getListDatabase = async (repeated) => {
    try {
        const response = await notion.databases.query({
            database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
        })
        return response;
    } catch (e) {
        console.log('Erro ao recuperar infos...');
        if (!repeated) getListDatabase(true);
        return null;
    }
}