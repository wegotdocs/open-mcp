import { z } from "zod";
export const toolName = `post_folders_id_copy`;
export const toolDescription = `Copy folder`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/folders/{folder_id}/copy`;
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
export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier of the folder to copy.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder with the ID `0` can not be copied.") }).optional(), "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional() }).optional(), "body": z.object({ "name": z.string().min(1).max(255).describe("An optional new name for the copied folder.\n\nThere are some restrictions to the file name. Names containing\nnon-printable ASCII characters, forward and backward slashes\n(`/`, `\\`), as well as names with trailing spaces are\nprohibited.\n\nAdditionally, the names `.` and `..` are\nnot allowed either.").optional(), "parent": z.object({ "id": z.string().describe("The ID of parent folder") }).describe("The destination folder to copy the folder to.") }).optional() }).shape;
