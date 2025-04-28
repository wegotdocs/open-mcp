import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopdexvolume",
  "toolDescription": "Get the dexes with the highest trading volume.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/top_dex_volume",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "num_protocols": "num_protocols",
      "time_period": "time_period",
      "chain": "chain"
    }
  },
  inputParamsSchema
}

export default tool