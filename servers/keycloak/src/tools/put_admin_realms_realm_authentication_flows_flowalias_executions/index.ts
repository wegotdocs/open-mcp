export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_authentication_flows_flowalias_executions`
export const toolDescription = `Update authentication executions of a Flow`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{flowAlias}/executions`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "flowAlias"
  ],
  "cookie": [],
  "body": [
    "id",
    "requirement",
    "displayName",
    "alias",
    "description",
    "requirementChoices",
    "configurable",
    "authenticationFlow",
    "providerId",
    "authenticationConfig",
    "flowId",
    "level",
    "index",
    "priority"
  ]
}
export const flatMap = {}