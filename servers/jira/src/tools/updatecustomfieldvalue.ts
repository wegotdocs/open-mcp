import { z } from "zod"

export const toolName = `updatecustomfieldvalue`
export const toolDescription = `Update custom field value`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/app/field/{fieldIdOrKey}/value`
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
export const keys = {
  "query": [
    "generateChangelog"
  ],
  "header": [],
  "path": [
    "fieldIdOrKey"
  ],
  "cookie": [],
  "body": [
    "updates"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "fieldIdOrKey": z.string().describe("The ID or key of the custom field. For example, `customfield_10010`."), "generateChangelog": z.boolean().describe("Whether to generate a changelog for this update."), "updates": z.array(z.object({ "issueIds": z.array(z.number().int()).describe("The list of issue IDs."), "value": z.any().describe("The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:\n\n *  `string` the value must be a string.\n *  `number` the value must be a number.\n *  `datetime` the value must be a string that represents a date in the ISO format or the simplified extended ISO format. For example, `\"2023-01-18T12:00:00-03:00\"` or `\"2023-01-18T12:00:00.000Z\"`. However, the milliseconds part is ignored.\n *  `user` the value must be an object that contains the `accountId` field.\n *  `group` the value must be an object that contains the group `name` or `groupId` field. Because group names can change, we recommend using `groupId`.\n\nA list of appropriate values must be provided if the field is of the `list` [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types).") }).strict().describe("A list of issue IDs and the value to update a custom field to.")).describe("The list of custom field update details.").optional() }).shape