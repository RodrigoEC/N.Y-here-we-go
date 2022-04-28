import { Client } from "@notionhq/client";
import axios from 'axios';

export const notionAxios = axios.create({
    baseURL: `${process.env.REACT_APP_PROXY_URL}/https://api.notion.com`,
});

console.dir(notionAxios)

const notion = new Client({
    auth: process.env.REACT_APP_NOTION_API_KEY,
    baseUrl: `${process.env.REACT_APP_PROXY_URL}/https://api.notion.com`,
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

export const updatePage = async (pageId, properties) => {
    try {
        const response = await notionAxios.patch(
            `/pages/${pageId}`,
            properties,
            {
                headers: {
                    Authentication: `Bearer ${process.env.REACT_APP_NOTION_API_KEY}`,
                    'Notion-Version': '2022-02-22',
                }
            }
        );
        return response;
    } catch (e) {
        console.log('Erro ao fazer o update da página de ID:', pageId);
        return null;
    }
}

export const createPage = async (properties) => {
    try {
        const response = await notion.pages.create({
            parent: {
                database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
            },
            properties: properties,
        });
        return response;
    } catch (e) {
        console.log('Erro ao fazer ao criar uma página');
        return null;
    };
};

export const removePage = async (pageId) => {
    try {
        const response = await notion.blocks.delete({
            block_id: pageId,
        });
        return response;
    } catch (e) {
        console.log('Erro ao fazer ao criar uma página');
        return null;
    };
}