import { z } from "zod";
export const toolName = `getworkflowspaginated`;
export const toolDescription = `Get workflows paginated`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/workflow/search`;
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
        "workflowName",
        "expand",
        "queryString",
        "orderBy",
        "isActive"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
    "workflowName": z.array(z.string()).describe("The name of a workflow to return. To include multiple workflows, provide an ampersand-separated list. For example, `workflowName=name1&workflowName=name2`.").optional(),
    "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `transitions` For each workflow, returns information about the transitions inside the workflow.\n *  `transitions.rules` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.\n *  `transitions.properties` For each workflow transition, returns information about its properties. Transitions are included automatically if this expand is requested.\n *  `statuses` For each workflow, returns information about the statuses inside the workflow.\n *  `statuses.properties` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.\n *  `default` For each workflow, returns information about whether this is the default workflow.\n *  `schemes` For each workflow, returns information about the workflow schemes the workflow is assigned to.\n *  `projects` For each workflow, returns information about the projects the workflow is assigned to, through workflow schemes.\n *  `hasDraftWorkflow` For each workflow, returns information about whether the workflow has a draft version.\n *  `operations` For each workflow, returns information about the actions that can be undertaken on the workflow.").optional(),
    "queryString": z.string().describe("String used to perform a case-insensitive partial match with workflow name.").optional(),
    "orderBy": z.enum(["name", "-name", "+name", "created", "-created", "+created", "updated", "+updated", "-updated"]).describe("[Order](#ordering) the results by a field:\n\n *  `name` Sorts by workflow name.\n *  `created` Sorts by create time.\n *  `updated` Sorts by update time.").optional(),
    "isActive": z.boolean().describe("Filters active and inactive workflows.").optional()
};
