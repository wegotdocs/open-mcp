import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateexchangerates",
  "toolDescription": "Update current exchange rates",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/exchange-rates",
  "method": "patch",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool