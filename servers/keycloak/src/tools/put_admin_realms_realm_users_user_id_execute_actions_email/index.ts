export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_user_id_execute_actions_email`
export const toolDescription = `Send an email to the user with a link they can click to execute particular actions.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/execute-actions-email`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "client_id",
    "lifespan",
    "redirect_uri"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}