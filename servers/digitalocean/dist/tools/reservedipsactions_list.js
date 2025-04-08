import { z } from "zod";
export const toolName = `reservedipsactions_list`;
export const toolDescription = `List All Actions for a Reserved IP`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/reserved_ips/{reserved_ip}/actions`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "reserved_ip"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "reserved_ip": z.string().ip({ version: "v4" }).describe("A reserved IP address.")
};
