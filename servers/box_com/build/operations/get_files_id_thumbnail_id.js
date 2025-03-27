import { z } from "zod";
export const toolName = `get_files_id_thumbnail_id`;
export const toolDescription = `Get file thumbnail`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/files/{file_id}/thumbnail.{extension}`;
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
export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`."), "extension": z.enum(["png", "jpg"]).describe("The file format for the thumbnail") }).optional(), "query": z.object({ "min_height": z.number().int().gte(32).lte(320).describe("The minimum height of the thumbnail").optional(), "min_width": z.number().int().gte(32).lte(320).describe("The minimum width of the thumbnail").optional(), "max_height": z.number().int().gte(32).lte(320).describe("The maximum height of the thumbnail").optional(), "max_width": z.number().int().gte(32).lte(320).describe("The maximum width of the thumbnail").optional() }).optional() }).shape;
