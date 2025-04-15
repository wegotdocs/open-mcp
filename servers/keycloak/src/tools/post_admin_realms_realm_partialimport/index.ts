import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_partialimport",
  "toolDescription": "Partial import from a JSON file to an existing realm.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/partialImport",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool