import { z } from "zod";
export const toolName = `get_folders_id_get_shared_link`;
export const toolDescription = `Get shared link for folder`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/folders/{folder_id}#get_shared_link`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.") }).optional(), "query": z.object({ "fields": z.string().describe("Explicitly request the `shared_link` fields\nto be returned for this item.") }).optional() }).shape;
