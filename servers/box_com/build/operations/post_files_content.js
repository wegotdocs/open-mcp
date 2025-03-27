import { z } from "zod";
export const toolName = `post_files_content`;
export const toolDescription = `Upload file`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/files/content`;
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
export const inputParams = z.object({ "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional() }).optional(), "header": z.object({ "content-md5": z.string().describe("An optional header containing the SHA1 hash of the file to\nensure that the file was not corrupted in transit.").optional() }).optional() }).shape;
