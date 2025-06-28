import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "closesession",
  "toolDescription": "Close WebSocket Session",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/ws",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "sessionId": "sessionId"
    }
  },
  inputParamsSchema
}

export default tool