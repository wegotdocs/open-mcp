import { z } from "zod";
export const toolName = `getnotificationschemes`;
export const toolDescription = `Get notification schemes paginated`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/notificationscheme`;
export const method = `get`;
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
        "startAt",
        "maxResults",
        "id",
        "projectId",
        "onlyDefault",
        "expand"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
    "id": z.array(z.string()).describe("The list of notification schemes IDs to be filtered by").optional(),
    "projectId": z.array(z.string()).describe("The list of projects IDs to be filtered by").optional(),
    "onlyDefault": z.boolean().describe("When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false.").optional(),
    "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about any custom fields assigned to receive an event\n *  `group` Returns information about any groups assigned to receive an event\n *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information\n *  `projectRole` Returns information about any project roles assigned to receive an event\n *  `user` Returns information about any users assigned to receive an event").optional()
};
