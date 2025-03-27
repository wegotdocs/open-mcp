import { z } from "zod";
export const toolName = `uploadsessionsadd`;
export const toolDescription = `Start Upload Session`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/file-storage/upload-sessions`;
export const method = `post`;
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
export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "drive_id": z.string().describe("ID of the drive to upload to.").optional(), "name": z.string().describe("The name of the file."), "parent_folder_id": z.string().describe("The parent folder to create the new file within."), "size": z.number().int().describe("The size of the file in bytes") }).strict().optional() }).shape;
