import { z } from "zod";
export const toolName = `setactors`;
export const toolDescription = `Set actors for project role`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/project/{projectIdOrKey}/role/{id}`;
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
        "projectIdOrKey",
        "id"
    ],
    "cookie": [],
    "body": [
        "categorisedActors",
        "b_id"
    ]
};
export const flatMap = {
    "b_id": "id"
};
export const inputParams = {
    "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
    "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
    "categorisedActors": z.record(z.array(z.string())).describe("The actors to add to the project role.\n\nAdd groups using:\n\n *  `atlassian-group-role-actor` and a list of group names.\n *  `atlassian-group-role-actor-id` and a list of group IDs.\n\nAs a group's name can change, use of `atlassian-group-role-actor-id` is recommended. For example, `\"atlassian-group-role-actor-id\":[\"eef79f81-0b89-4fca-a736-4be531a10869\",\"77f6ab39-e755-4570-a6ae-2d7a8df0bcb8\"]`.\n\nAdd users using `atlassian-user-role-actor` and a list of account IDs. For example, `\"atlassian-user-role-actor\":[\"12345678-9abc-def1-2345-6789abcdef12\", \"abcdef12-3456-789a-bcde-f123456789ab\"]`.").optional(),
    "b_id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.").readonly().optional()
};
