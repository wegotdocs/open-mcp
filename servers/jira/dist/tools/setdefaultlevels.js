import { z } from "zod";
export const toolName = `setdefaultlevels`;
export const toolDescription = `Set default issue security levels`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuesecurityschemes/level/default`;
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
        "defaultValues"
    ]
};
export const flatMap = {};
export const inputParams = {
    "defaultValues": z.array(z.object({ "defaultLevelId": z.string().describe("The ID of the issue security level to set as default for the specified scheme. Providing null will reset the default level."), "issueSecuritySchemeId": z.string().describe("The ID of the issue security scheme to set default level for.") }).catchall(z.any()).describe("Details of scheme and new default level.")).describe("List of objects with issue security scheme ID and new default level ID.")
};
