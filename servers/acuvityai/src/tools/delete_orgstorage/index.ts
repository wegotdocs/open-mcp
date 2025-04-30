import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_orgstorage",
  "toolDescription": "Delete an orgstorage given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/orgstorages/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool