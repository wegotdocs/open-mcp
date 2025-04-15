import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_client_description_converter",
  "toolDescription": "Base path for importing clients under this realm.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-description-converter",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool