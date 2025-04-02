import { z } from "zod"

export const toolName = `getworkflowtransitionruleconfigurations`
export const toolDescription = `Get workflow transition rule configurations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflow/rule/config`
export const method = `get`
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
    "startAt",
    "maxResults",
    "types",
    "keys",
    "workflowNames",
    "withTags",
    "draft",
    "expand"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().lte(50).describe("The maximum number of items to return per page."), "types": z.array(z.enum(["postfunction","condition","validator"])).describe("The types of the transition rules to return."), "keys": z.array(z.string()).describe("The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return.").optional(), "workflowNames": z.array(z.string().max(50)).describe("The list of workflow names to filter by.").optional(), "withTags": z.array(z.string().max(20)).describe("The list of `tags` to filter by.").optional(), "draft": z.boolean().describe("Whether draft or published workflows are returned. If not provided, both workflow types are returned.").optional(), "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to.").optional() }).shape