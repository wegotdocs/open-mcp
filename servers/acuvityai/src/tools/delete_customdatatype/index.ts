import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_customdatatype",
  "toolDescription": "Delete a custom data type given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/customdatatypes/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool