import { z } from "zod";
export const toolName = `markdown_render_raw`;
export const toolDescription = `Render a Markdown document in raw mode`;
export const baseUrl = `https://github.com`;
export const path = `/markdown/raw`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
