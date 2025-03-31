import { z } from "zod"

export const toolName = `replaceissuefieldoption`
export const toolDescription = `Replace issue field option`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldKey}/option/{optionId}/issue`
export const method = `delete`
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

export const inputParams = z.object({ "q_replaceWith": z.number().int().describe("The ID of the option that will replace the currently selected option.").optional(), "q_jql": z.string().describe("A JQL query that specifies the issues to be updated. For example, *project=10000*.").optional(), "q_overrideScreenSecurity": z.boolean().describe("Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission."), "q_overrideEditableFlag": z.boolean().describe("Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)."), "p_fieldKey": z.string().describe("The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:\n\n *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.\n *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`"), "p_optionId": z.number().int().describe("The ID of the option to be deselected.") }).shape