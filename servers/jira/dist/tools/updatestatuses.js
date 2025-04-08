import { z } from "zod";
export const toolName = `updatestatuses`;
export const toolDescription = `Bulk update statuses`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/statuses`;
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
        "statuses"
    ]
};
export const flatMap = {};
export const inputParams = {
    "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "id": z.string().describe("The ID of the status."), "name": z.string().describe("The name of the status."), "statusCategory": z.enum(["TODO", "IN_PROGRESS", "DONE"]).describe("The category of the status.") }).catchall(z.any()).describe("Details of the status being updated.")).describe("The list of statuses that will be updated.")
};
