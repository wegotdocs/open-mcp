import { z } from "zod";
export const toolName = `retrieve_a_file`;
export const toolDescription = `Retrieve a File`;
export const baseUrl = `https://api.increase.com`;
export const path = `/files/{file_id}`;
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
export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The identifier of the File.") }).optional() }).shape;
