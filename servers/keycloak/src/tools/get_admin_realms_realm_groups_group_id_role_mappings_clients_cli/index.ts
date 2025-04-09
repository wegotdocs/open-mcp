export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_groups_group_id_role_mappings_clients_cli`
export const toolDescription = `Get effective client-level role mappings This recurses any composite roles`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}/composite`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}