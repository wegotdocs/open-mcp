import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_customdatatype",
  "toolDescription": "Retrieve a custom data type given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/customdatatypes/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool