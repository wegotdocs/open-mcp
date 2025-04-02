import { z } from "zod";
export const toolName = `get_certs`;
export const toolDescription = ``;
export const baseUrl = `https://api.vercel.com`;
export const path = `/certs`;
export const method = `get`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({}).shape;
