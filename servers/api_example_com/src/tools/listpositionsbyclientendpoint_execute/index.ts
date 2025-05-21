import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listpositionsbyclientendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/positions/client/{clientId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool