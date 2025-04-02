import { z } from "zod";
export const toolName = `addsecuritylevel`;
export const toolDescription = `Add issue security levels`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuesecurityschemes/{schemeId}/level`;
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
    "path": [
        "schemeId"
    ],
    "cookie": [],
    "body": [
        "levels"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "schemeId": z.string().describe("The ID of the issue security scheme."), "levels": z.array(z.object({ "description": z.string().max(4000).describe("The description of the issue security scheme level.").optional(), "isDefault": z.boolean().describe("Specifies whether the level is the default level. False by default.").optional(), "members": z.array(z.object({ "parameter": z.string().describe("The value corresponding to the specified member type.").optional(), "type": z.string().describe("The issue security level member type, e.g `reporter`, `group`, `user`, `projectrole`, `applicationRole`.") }).strict()).describe("The list of level members which should be added to the issue security scheme level.").optional(), "name": z.string().max(255).describe("The name of the issue security scheme level. Must be unique.") }).strict()).describe("The list of scheme levels which should be added to the security scheme.").optional() }).shape;
