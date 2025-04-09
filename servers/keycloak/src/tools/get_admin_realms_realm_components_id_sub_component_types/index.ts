export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_components_id_sub_component_types`
export const toolDescription = `List of subcomponent types that are available to configure for a particular parent component.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/components/{id}/sub-component-types`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "type"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}