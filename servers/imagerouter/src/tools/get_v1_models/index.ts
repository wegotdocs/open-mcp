import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_models",
  "toolDescription": "",
  "baseUrl": "https://api.imagerouter.io",
  "path": "/v1/models",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool