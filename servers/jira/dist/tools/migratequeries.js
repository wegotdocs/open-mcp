import { z } from "zod";
export const toolName = `migratequeries`;
export const toolDescription = `Convert user identifiers to account IDs in JQL queries`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/jql/pdcleaner`;
export const method = `post`;
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
        "queryStrings"
    ]
};
export const flatMap = {};
export const inputParams = {
    "queryStrings": z.array(z.string()).describe("A list of queries with user identifiers. Maximum of 100 queries.").optional()
};
