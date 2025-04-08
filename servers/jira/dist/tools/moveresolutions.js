import { z } from "zod";
export const toolName = `moveresolutions`;
export const toolDescription = `Move resolutions`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/resolution/move`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "after",
        "ids",
        "position"
    ]
};
export const flatMap = {};
export const inputParams = {
    "after": z.string().describe("The ID of the resolution. Required if `position` isn't provided.").optional(),
    "ids": z.array(z.string()).describe("The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID."),
    "position": z.string().describe("The position for issue resolutions to be moved to. Required if `after` isn't provided.").optional()
};
