export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users_user_id_`
export const toolDescription = `Get representation of the user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "userProfileMetadata"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}