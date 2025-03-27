import { z } from "zod";
export const toolName = `chunkedupload`;
export const toolDescription = `Chunked upload of data`;
export const baseUrl = `https://platform.climate.com`;
export const path = `/v4/uploads/{uploadId}`;
export const method = `put`;
export const security = [
    {
        "key": "X-Api-Key",
        "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-Api-Key"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "header": z.object({ "Content-Range": z.string().describe("Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes)."), "Content-Type": z.string().describe("Must be `application/octet-stream`") }).optional(), "path": z.object({ "uploadId": z.string().uuid().describe("Unique identifier of an Upload.") }).optional() }).shape;
