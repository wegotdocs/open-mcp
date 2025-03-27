import { z } from "zod";
export const toolName = `get_folders_id`;
export const toolDescription = `Get folder information`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/folders/{folder_id}`;
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
export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.") }).optional(), "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.\n\nAdditionally this field can be used to query any metadata\napplied to the file by specifying the `metadata` field as well\nas the scope and key of the template to retrieve, for example\n`?field=metadata.enterprise_12345.contractTemplate`.").optional() }).optional(), "header": z.object({ "if-none-match": z.string().describe("Ensures an item is only returned if it has changed.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `304 Not Modified` if the item has not\nchanged since.").optional(), "boxapi": z.string().describe("The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.").optional() }).optional() }).shape;
