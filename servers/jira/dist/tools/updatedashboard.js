import { z } from "zod";
export const toolName = `updatedashboard`;
export const toolDescription = `Update dashboard`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/dashboard/{id}`;
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
    "query": [
        "extendAdminPermissions"
    ],
    "header": [],
    "path": [
        "id"
    ],
    "cookie": [],
    "body": [
        "description",
        "editPermissions",
        "name",
        "sharePermissions"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().describe("The ID of the dashboard to update."), "extendAdminPermissions": z.boolean().describe("Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)"), "description": z.string().describe("The description of the dashboard.").optional(), "editPermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user", "group", "project", "projectRole", "global", "loggedin", "authenticated", "project-unknown"]).describe("The type of share permission:\n\n *  `user` Shared with a user.\n *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.\n *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.\n *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.\n *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.\n *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.\n *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The edit permissions for the dashboard."), "name": z.string().describe("The name of the dashboard."), "sharePermissions": z.array(z.object({ "group": z.string().optional(), "id": z.number().int().describe("The unique identifier of the share permission.").readonly().optional(), "project": z.string().optional(), "role": z.string().optional(), "type": z.enum(["user", "group", "project", "projectRole", "global", "loggedin", "authenticated", "project-unknown"]).describe("The type of share permission:\n\n *  `user` Shared with a user.\n *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.\n *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.\n *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.\n *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.\n *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.\n *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request."), "user": z.string().optional() }).strict().describe("Details of a share permission for the filter.")).describe("The share permissions for the dashboard.") }).shape;
