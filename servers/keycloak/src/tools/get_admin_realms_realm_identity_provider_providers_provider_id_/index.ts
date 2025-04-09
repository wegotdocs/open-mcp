export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_identity_provider_providers_provider_id_`
export const toolDescription = `Get the identity provider factory for that provider id`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/providers/{provider_id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "provider_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}