export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_identity_provider_instances_alias_reload_`
export const toolDescription = `Reaload keys for the identity provider if the provider supports it, "true" is returned if reload was performed, "false" if not.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}/reload-keys`
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