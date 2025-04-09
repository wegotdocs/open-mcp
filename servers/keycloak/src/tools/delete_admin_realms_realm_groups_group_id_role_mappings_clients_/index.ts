export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_groups_group_id_role_mappings_clients_`
export const toolDescription = `Delete client-level roles from user or group role mapping`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}