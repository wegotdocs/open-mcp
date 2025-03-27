import { z } from "zod";
export const toolName = `put_folders_id_remove_shared_link`;
export const toolDescription = `Remove shared link from folder`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/folders/{folder_id}#remove_shared_link`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.") }).optional(), "query": z.object({ "fields": z.string().describe("Explicitly request the `shared_link` fields\nto be returned for this item.") }).optional(), "body": z.object({ "shared_link": z.record(z.any()).nullable().describe("By setting this value to `null`, the shared link\nis removed from the folder.").optional() }).optional() }).shape;
