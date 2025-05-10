import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchaintvl",
  "toolDescription": "Get the TVL for a specific chain or L2.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_chain_tvl",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "chain": "chain"
    }
  },
  inputParamsSchema
}

export default tool