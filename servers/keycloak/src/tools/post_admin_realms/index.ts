import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms",
  "toolDescription": "Import a realm. Imports a realm from a full representation of that realm.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool