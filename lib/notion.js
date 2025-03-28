// lib/notion.js
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

export async function getPage(pageId) {
  return await notion.getPage(pageId);
}
