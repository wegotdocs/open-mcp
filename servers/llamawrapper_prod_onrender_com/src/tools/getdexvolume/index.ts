import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdexvolume",
  "toolDescription": "Get the trading volume of a dex",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_dex_volume",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "defillamaId": "defillamaId",
      "time_period": "time_period"
    }
  },
  inputParamsSchema
}

export default tool