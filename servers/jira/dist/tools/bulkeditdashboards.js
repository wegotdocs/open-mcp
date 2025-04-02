import { z } from "zod";
export const toolName = `bulkeditdashboards`;
export const toolDescription = `Bulk edit dashboards`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/dashboard/bulk/edit`;
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
        "action",
        "changeOwnerDetails",
        "entityIds",
        "extendAdminPermissions",
        "permissionDetails"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "action": z.enum(["changeOwner", "changePermission", "addPermission", "removePermission"]).describe("Allowed action for bulk edit shareable entity"), "changeOwnerDetails": z.string().optional(), "entityIds": z.array(z.number().int()).describe("The id list of shareable entities to be changed."), "extendAdminPermissions": z.boolean().describe("Whether the actions are executed by users with Administer Jira global permission.").optional(), "permissionDetails": z.string().optional() }).shape;
