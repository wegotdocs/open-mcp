import { z } from "zod";
export const toolName = `filesupdate`;
export const toolDescription = `Rename or move File`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/file-storage/files/{id}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "description": z.string().describe("Optional description of the file.").optional(), "name": z.string().describe("The name of the file.").optional(), "parent_folder_id": z.string().describe("The parent folder to create the new file within.").optional() }).strict().optional() }).shape;
