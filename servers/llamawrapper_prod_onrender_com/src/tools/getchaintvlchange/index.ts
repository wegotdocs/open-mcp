import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchaintvlchange",
  "toolDescription": "Get the change in TVL for a specific chain or L2 over a given time period.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_chain_tvl_change",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "chain": "chain",
      "time_period": "time_period"
    }
  },
  inputParamsSchema
}

export default tool