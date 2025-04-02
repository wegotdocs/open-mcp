import { z } from "zod";
export const toolName = `getnetworks`;
export const toolDescription = `Get supported networks of the API`;
export const baseUrl = `https://token-api.thegraph.com`;
export const path = `/networks`;
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
