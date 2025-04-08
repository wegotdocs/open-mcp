import { z } from "zod";
export const toolName = `createstatuses`;
export const toolDescription = `Bulk create statuses`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/statuses`;
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
        "scope",
        "statuses"
    ]
};
export const flatMap = {};
export const inputParams = {
    "scope": z.object({ "project": z.object({ "id": z.string().describe("The ID of the project.") }).strict().nullable().describe("Project ID details.").optional(), "type": z.enum(["PROJECT", "GLOBAL"]).describe("The scope of the status. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.") }).strict().describe("The scope of the status."),
    "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "name": z.string().max(255).describe("The name of the status."), "statusCategory": z.enum(["TODO", "IN_PROGRESS", "DONE"]).describe("The category of the status.") }).strict().describe("Details of the status being created.")).describe("Details of the statuses being created.")
};
