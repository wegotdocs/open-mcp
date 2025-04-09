export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_testsmtpconnection`
export const toolDescription = `Test SMTP connection with current logged in user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/testSMTPConnection`
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