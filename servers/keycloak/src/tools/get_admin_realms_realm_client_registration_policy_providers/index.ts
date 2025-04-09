export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_client_registration_policy_providers`
export const toolDescription = `Base path for retrieve providers with the configProperties properly filled`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-registration-policy/providers`
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