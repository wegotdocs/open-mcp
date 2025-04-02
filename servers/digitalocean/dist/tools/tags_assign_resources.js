import { z } from "zod";
export const toolName = `tags_assign_resources`;
export const toolDescription = `Tag a Resource`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/tags/{tag_id}/resources`;
export const method = `post`;
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
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "tag_id"
    ],
    "cookie": [],
    "body": [
        "resources"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "tag_id": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag."), "resources": z.array(z.any()).describe("An array of objects containing resource_id and resource_type  attributes.") }).shape;
