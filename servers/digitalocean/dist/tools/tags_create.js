import { z } from "zod";
export const toolName = `tags_create`;
export const toolDescription = `Create a New Tag`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/tags`;
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
    "path": [],
    "cookie": [],
    "body": [
        "name",
        "resources"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "name": z.string().regex(new RegExp("^[a-zA-Z0-9_\\-\\:]+$")).max(255).describe("The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores.\nThere is a limit of 255 characters per tag.\n\n**Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.\n\nWhen working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named \"PROD\", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).\n\nTagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named \"PROD\", you can tag resources in the control panel by entering \"prod\". The tag will still display with its canonical capitalization, \"PROD\".\n").optional(), "resources": z.string().optional() }).shape;
