import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refreshtime",
  "toolDescription": "Refresh WebSocket Subscription Time",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/ws/subscriptions/refresh",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "query": {
      "customerId": "customerId"
    },
    "body": {
      "desiredCapacity": "desiredCapacity"
    }
  },
  inputParamsSchema
}

export default tool