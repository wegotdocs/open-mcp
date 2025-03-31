import { z } from "zod"

export const toolName = `createversion`
export const toolDescription = `Create version`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/version`
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

export const inputParams = z.object({ "b_approvers": z.array(z.object({ "accountId": z.string().describe("The Atlassian account ID of the approver.").readonly().optional(), "declineReason": z.string().describe("A description of why the user is declining the approval.").readonly().optional(), "description": z.string().describe("A description of what the user is approving within the specified version.").readonly().optional(), "status": z.string().describe("The status of the approval, which can be *PENDING*, *APPROVED*, or *DECLINED*").readonly().optional() }).catchall(z.any()).describe("Contains details about a version approver.")).describe("If the expand option `approvers` is used, returns a list containing the approvers for this version.").readonly().optional(), "b_archived": z.boolean().describe("Indicates that the version is archived. Optional when creating or updating a version.").optional(), "b_description": z.string().describe("The description of the version. Optional when creating or updating a version. The maximum size is 16,384 bytes.").optional(), "b_driver": z.string().describe("If the expand option `driver` is used, returns the Atlassian account ID of the driver.").readonly().optional(), "b_expand": z.string().describe("Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `operations` Returns the list of operations available for this version.\n *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.\n *  `driver` Returns the Atlassian account ID of the version driver.\n *  `approvers` Returns a list containing approvers for this version.\n\nOptional for create and update.").optional(), "b_id": z.string().describe("The ID of the version.").readonly().optional(), "b_issuesStatusForFixVersion": z.string().optional(), "b_moveUnfixedIssuesTo": z.string().url().describe("The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.").optional(), "b_name": z.string().describe("The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.").optional(), "b_operations": z.array(z.object({ "href": z.string().optional(), "iconClass": z.string().optional(), "id": z.string().optional(), "label": z.string().optional(), "styleClass": z.string().optional(), "title": z.string().optional(), "weight": z.number().int().optional() }).strict().describe("Details about the operations available in this version.")).describe("If the expand option `operations` is used, returns the list of operations available for this version.").readonly().optional(), "b_overdue": z.boolean().describe("Indicates that the version is overdue.").readonly().optional(), "b_project": z.string().describe("Deprecated. Use `projectId`.").optional(), "b_projectId": z.number().int().describe("The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.").optional(), "b_releaseDate": z.string().date().describe("The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.").optional(), "b_released": z.boolean().describe("Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.").optional(), "b_self": z.string().url().describe("The URL of the version.").readonly().optional(), "b_startDate": z.string().date().describe("The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.").optional(), "b_userReleaseDate": z.string().describe("The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.").readonly().optional(), "b_userStartDate": z.string().describe("The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.").readonly().optional() }).shape