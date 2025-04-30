import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_customdataset",
  "toolDescription": "Delete a custom data set given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/customdatasets/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool