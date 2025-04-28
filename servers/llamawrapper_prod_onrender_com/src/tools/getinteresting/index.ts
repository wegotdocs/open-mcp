import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinteresting",
  "toolDescription": "Returns interesting/important data on what is happening on-chain re protocols, chains and yields.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_interesting",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "time_period": "time_period"
    }
  },
  inputParamsSchema
}

export default tool