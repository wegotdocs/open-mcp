import { z } from "zod";
export const toolName = `volumes_delete_byname`;
export const toolDescription = `Delete a Block Storage Volume by Name`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/volumes`;
export const method = `delete`;
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
    "query": [
        "name",
        "region"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "name": z.string().describe("The block storage volume's name.").optional(),
    "region": z.enum(["ams1", "ams2", "ams3", "blr1", "fra1", "lon1", "nyc1", "nyc2", "nyc3", "sfo1", "sfo2", "sfo3", "sgp1", "tor1", "syd1"]).describe("The slug identifier for the region where the resource will initially be  available.").optional()
};
