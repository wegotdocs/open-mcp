export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_identity_provider_import_config`
export const toolDescription = `Import identity provider from JSON body`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/import-config`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}