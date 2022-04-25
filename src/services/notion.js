import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.REACT_APP_NOTION_API_KEY,
  })

export const getListDatabase = async () => {
    try {
        const response = await notion.databases.query({
            database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
        })
        console.log(response)
        return response;
    } catch (e) {
        console.log(e);
    }
}