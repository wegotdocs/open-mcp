import { z } from "zod";
export const toolName = `blockchains_route_blockchains_get`;
export const toolDescription = `Blockchains Route`;
export const baseUrl = `https://engineapi.moonstream.to/metatx`;
export const path = `/blockchains`;
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
