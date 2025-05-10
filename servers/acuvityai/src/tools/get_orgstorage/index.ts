import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_orgstorage",
  "toolDescription": "Retrieve an orgstorage given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/orgstorages/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool