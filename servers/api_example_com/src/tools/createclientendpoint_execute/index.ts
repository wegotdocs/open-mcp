import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createclientendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/clients",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool