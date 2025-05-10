import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnetbridgeflow",
  "toolDescription": "Get the net bridge flow for a specific chain or L2 over a given time period.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_net_bridge_flow",
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