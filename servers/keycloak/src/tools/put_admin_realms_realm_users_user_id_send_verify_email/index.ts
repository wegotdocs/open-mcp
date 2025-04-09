export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_user_id_send_verify_email`
export const toolDescription = `Send an email-verification email to the user An email contains a link the user can click to verify their email address.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/send-verify-email`
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