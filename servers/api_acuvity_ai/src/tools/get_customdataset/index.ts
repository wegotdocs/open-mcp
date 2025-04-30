import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_customdataset",
  "toolDescription": "Retrieve a custom data set given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/customdatasets/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool