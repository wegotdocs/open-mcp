import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopyields",
  "toolDescription": "Get the top yielding pools.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_top_yields",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "num_pools": "num_pools",
      "chain": "chain",
      "stablecoin": "stablecoin",
      "token": "token",
      "single_sided": "single_sided",
      "outlook": "outlook"
    }
  },
  inputParamsSchema
}

export default tool