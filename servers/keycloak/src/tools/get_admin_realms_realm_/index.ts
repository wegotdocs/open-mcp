import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_",
  "toolDescription": "Get the top-level representation of the realm It will not include nested information like User and Client representations.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool