import { z } from "zod";
export const toolName = `getmovies`;
export const toolDescription = `Get the status of your movies`;
export const baseUrl = `https://api.json2video.com/v2`;
export const path = `/movies`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
