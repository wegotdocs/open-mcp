import { z } from "zod"

export const toolName = `updateproject`
export const toolDescription = `Update project`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectIdOrKey}`
export const method = `put`
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

export const inputParams = z.object({ "p_projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."), "q_expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:\n\n *  `description` The project description.\n *  `issueTypes` The issue types associated with the project.\n *  `lead` The project lead.\n *  `projectKeys` All project keys associated with the project.").optional(), "b_assigneeType": z.enum(["PROJECT_LEAD","UNASSIGNED"]).describe("The default assignee when creating issues for this project.").optional(), "b_avatarId": z.number().int().describe("An integer value for the project's avatar.").optional(), "b_categoryId": z.number().int().describe("The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. To remove the project category from the project, set the value to `-1.`").optional(), "b_description": z.string().describe("A brief description of the project.").optional(), "b_issueSecurityScheme": z.number().int().describe("The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.").optional(), "b_key": z.string().describe("Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.").optional(), "b_lead": z.string().describe("This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Cannot be provided with `leadAccountId`.").optional(), "b_leadAccountId": z.string().max(128).describe("The account ID of the project lead. Cannot be provided with `lead`.").optional(), "b_name": z.string().describe("The name of the project.").optional(), "b_notificationScheme": z.number().int().describe("The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.").optional(), "b_permissionScheme": z.number().int().describe("The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.").optional(), "b_releasedProjectKeys": z.array(z.string()).describe("Previous project keys to be released from the current project. Released keys must belong to the current project and not contain the current project key").optional(), "b_url": z.string().describe("A link to information about this project, such as project documentation").optional() }).shape