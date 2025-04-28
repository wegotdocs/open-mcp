import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprotocoltvl",
  "toolDescription": "Get the current TVL of a protocol.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/tvl/{slug}",
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