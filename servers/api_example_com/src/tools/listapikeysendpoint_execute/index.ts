import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listapikeysendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api-keys/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId"
    }
  },
  inputParamsSchema
}

export default tool