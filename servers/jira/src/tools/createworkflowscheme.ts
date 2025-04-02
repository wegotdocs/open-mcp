import { z } from "zod"

export const toolName = `createworkflowscheme`
export const toolDescription = `Create workflow scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflowscheme`
export const method = `post`
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
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "defaultWorkflow",
    "description",
    "draft",
    "id",
    "issueTypeMappings",
    "issueTypes",
    "lastModified",
    "lastModifiedUser",
    "name",
    "originalDefaultWorkflow",
    "originalIssueTypeMappings",
    "self",
    "updateDraftIfNeeded"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "defaultWorkflow": z.string().describe("The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.").optional(), "description": z.string().describe("The description of the workflow scheme.").optional(), "draft": z.boolean().describe("Whether the workflow scheme is a draft or not.").readonly().optional(), "id": z.number().int().describe("The ID of the workflow scheme.").readonly().optional(), "issueTypeMappings": z.record(z.string()).describe("The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").optional(), "issueTypes": z.record(z.object({ "avatarId": z.number().int().describe("The ID of the issue type's avatar.").readonly().optional(), "description": z.string().describe("The description of the issue type.").readonly().optional(), "entityId": z.string().uuid().describe("Unique ID for next-gen projects.").readonly().optional(), "hierarchyLevel": z.number().int().describe("Hierarchy level of the issue type.").readonly().optional(), "iconUrl": z.string().describe("The URL of the issue type's avatar.").readonly().optional(), "id": z.string().describe("The ID of the issue type.").readonly().optional(), "name": z.string().describe("The name of the issue type.").readonly().optional(), "scope": z.string().optional(), "self": z.string().describe("The URL of these issue type details.").readonly().optional(), "subtask": z.boolean().describe("Whether this issue type is used to create subtasks.").readonly().optional() }).strict().describe("Details about an issue type.")).describe("The issue types available in Jira.").readonly().optional(), "lastModified": z.string().describe("The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.").readonly().optional(), "lastModifiedUser": z.string().optional(), "name": z.string().describe("The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.").optional(), "originalDefaultWorkflow": z.string().describe("For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.").readonly().optional(), "originalIssueTypeMappings": z.record(z.string().readonly()).describe("For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.").readonly().optional(), "self": z.string().url().readonly().optional(), "updateDraftIfNeeded": z.boolean().describe("Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:\n\n *  Update an active workflow scheme with `updateDraftIfNeeded` set to `true`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.\n *  Update an active workflow scheme with `updateDraftIfNeeded` set to `false`: An error is returned, as active workflow schemes cannot be updated.\n *  Update an inactive workflow scheme with `updateDraftIfNeeded` set to `true`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.\n\nDefaults to `false`.").optional() }).shape