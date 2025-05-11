import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_currencies",
  "toolDescription": "Load a currency",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/currencies",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "code": "code",
      "label": "label",
      "archived": "archived",
      "exchange_rate_timeline": "exchange_rate_timeline"
    }
  },
  inputParamsSchema
}

export default tool