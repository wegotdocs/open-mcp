import { z } from "zod";
export const toolName = `createplan`;
export const toolDescription = `Create plan`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/plans/plan`;
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
        "useGroupId"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "crossProjectReleases",
        "customFields",
        "exclusionRules",
        "issueSources",
        "leadAccountId",
        "name",
        "permissions",
        "scheduling"
    ]
};
export const flatMap = {};
export const inputParams = {
    "useGroupId": z.boolean().describe("Whether to accept group IDs instead of group names. Group names are deprecated.").optional(),
    "crossProjectReleases": z.array(z.object({ "name": z.string().describe("The cross-project release name."), "releaseIds": z.array(z.number().int()).describe("The IDs of the releases to include in the cross-project release.").optional() }).strict()).describe("The cross-project releases to include in the plan.").optional(),
    "customFields": z.array(z.object({ "customFieldId": z.number().int().describe("The custom field ID."), "filter": z.boolean().describe("Allows filtering issues based on their values for the custom field.").optional() }).strict()).describe("The custom fields for the plan.").optional(),
    "exclusionRules": z.string().optional(),
    "issueSources": z.array(z.object({ "type": z.enum(["Board", "Project", "Filter"]).describe("The issue source type. This must be \"Board\", \"Project\" or \"Filter\"."), "value": z.number().int().describe("The issue source value. This must be a board ID if the type is \"Board\", a project ID if the type is \"Project\" or a filter ID if the type is \"Filter\".") }).strict()).describe("The issue sources to include in the plan."),
    "leadAccountId": z.string().describe("The account ID of the plan lead.").optional(),
    "name": z.string().min(1).max(255).describe("The plan name."),
    "permissions": z.array(z.object({ "holder": z.string(), "type": z.enum(["View", "Edit"]).describe("The permission type. This must be \"View\" or \"Edit\".") }).strict()).describe("The permissions for the plan.").optional(),
    "scheduling": z.string()
};
