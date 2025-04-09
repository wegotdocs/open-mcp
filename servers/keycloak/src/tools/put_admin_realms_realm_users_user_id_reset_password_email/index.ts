export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_user_id_reset_password_email`
export const toolDescription = `Send an email to the user with a link they can click to reset their password.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/reset-password-email`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "client_id",
    "redirect_uri"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}