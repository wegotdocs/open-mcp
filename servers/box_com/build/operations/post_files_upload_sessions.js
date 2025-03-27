import { z } from "zod";
export const toolName = `post_files_upload_sessions`;
export const toolDescription = `Create upload session`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/files/upload_sessions`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "file_name": z.string().describe("The name of new file"), "file_size": z.number().int().describe("The total number of bytes of the file to be uploaded"), "folder_id": z.string().describe("The ID of the folder to upload the new file to.") }).optional() }).shape;
