import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_testsmtpconnection",
  "toolDescription": "Test SMTP connection with current logged in user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/testSMTPConnection",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool