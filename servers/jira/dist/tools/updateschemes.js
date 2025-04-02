import { z } from "zod";
export const toolName = `updateschemes`;
export const toolDescription = `Update workflow scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/workflowscheme/update`;
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
        "defaultWorkflowId",
        "description",
        "id",
        "name",
        "statusMappingsByIssueTypeOverride",
        "statusMappingsByWorkflows",
        "version",
        "workflowsForIssueTypes"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "defaultWorkflowId": z.string().describe("The ID of the workflow for issue types without having a mapping defined in this workflow scheme. Only used in global-scoped workflow schemes. If the `defaultWorkflowId` isn't specified, this is set to *Jira Workflow (jira)*.").optional(), "description": z.string().describe("The new description for this workflow scheme."), "id": z.string().describe("The ID of this workflow scheme."), "name": z.string().describe("The new name for this workflow scheme."), "statusMappingsByIssueTypeOverride": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type for this mapping."), "statusMappings": z.array(z.object({ "newStatusId": z.string().describe("The ID of the status in the new workflow."), "oldStatusId": z.string().describe("The ID of the status in the old workflow that isn't present in the new workflow.") }).strict().describe("The list of status mappings.")).describe("The list of status mappings.") }).strict().describe("Overrides, for the selected issue types, any status mappings provided in `statusMappingsByWorkflows`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.")).describe("Overrides, for the selected issue types, any status mappings provided in `statusMappingsByWorkflows`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.").optional(), "statusMappingsByWorkflows": z.array(z.object({ "newWorkflowId": z.string().describe("The ID of the new workflow."), "oldWorkflowId": z.string().describe("The ID of the old workflow."), "statusMappings": z.array(z.object({ "newStatusId": z.string().describe("The ID of the status in the new workflow."), "oldStatusId": z.string().describe("The ID of the status in the old workflow that isn't present in the new workflow.") }).strict().describe("The list of status mappings.")).describe("The list of status mappings.") }).strict().describe("The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.")).describe("The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.").optional(), "version": z.object({ "id": z.string().describe("The version UUID.").optional(), "versionNumber": z.number().int().describe("The version number.").optional() }).strict().describe("The current version details of this workflow scheme."), "workflowsForIssueTypes": z.array(z.object({ "issueTypeIds": z.array(z.string().describe("The issue types assigned to the workflow.")).describe("The issue types assigned to the workflow."), "workflowId": z.string().describe("The ID of the workflow.") }).strict().describe("The explicit association between issue types and a workflow in a workflow scheme.")).describe("Mappings from workflows to issue types.").optional() }).shape;
