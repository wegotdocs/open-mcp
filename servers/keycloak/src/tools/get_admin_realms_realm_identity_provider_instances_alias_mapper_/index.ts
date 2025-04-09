export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_identity_provider_instances_alias_mapper_`
export const toolDescription = `Get mapper types for identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}/mapper-types`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}