import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gethistoricalprotocoltvl",
  "toolDescription": "Get historical TVL data of a protocl.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/historical_protocol_tvl/{slug}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool