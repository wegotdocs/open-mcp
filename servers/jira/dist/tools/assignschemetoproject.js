import { z } from "zod";
export const toolName = `assignschemetoproject`;
export const toolDescription = `Assign workflow scheme to project`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/workflowscheme/project`;
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
        "projectId",
        "workflowSchemeId"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "projectId": z.string().describe("The ID of the project."), "workflowSchemeId": z.string().describe("The ID of the workflow scheme. If the workflow scheme ID is `null`, the operation assigns the default workflow scheme.").optional() }).shape;
