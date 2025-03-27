import { z } from "zod";
export const toolName = `get_files_id_content`;
export const toolDescription = `Download file`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/files/{file_id}/content`;
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
export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.") }).optional(), "header": z.object({ "range": z.string().describe("The byte range of the content to download.\n\nThe format `bytes={start_byte}-{end_byte}` can be used to specify\nwhat section of the file to download.").optional(), "boxapi": z.string().describe("The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.").optional() }).optional(), "query": z.object({ "version": z.string().describe("The file version to download").optional(), "access_token": z.string().describe("An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication.\nWhen using this parameter, please make sure that the access token is sufficiently scoped down to only allow read access to that file and no other files or folders.").optional() }).optional() }).shape;
