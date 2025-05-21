import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listfeaturesendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/features/list",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool