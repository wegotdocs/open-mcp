import { z } from "zod";
export const toolName = `readworkflowschemes`;
export const toolDescription = `Bulk get workflow schemes`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/workflowscheme/read`;
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
    "query": [
        "expand"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "projectIds",
        "workflowSchemeIds"
    ]
};
export const flatMap = {};
export const inputParams = {
    "expand": z.string().describe("Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.\n\nUse [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `workflows.usages` Returns the project and issue types that each workflow in the workflow scheme is associated with.").optional(),
    "projectIds": z.array(z.string().nullable().describe("The list of project IDs to query.")).nullable().describe("The list of project IDs to query.").optional(),
    "workflowSchemeIds": z.array(z.string().nullable().describe("The list of workflow scheme IDs to query.")).nullable().describe("The list of workflow scheme IDs to query.").optional()
};
