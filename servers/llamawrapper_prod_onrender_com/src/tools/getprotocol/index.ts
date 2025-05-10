import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprotocol",
  "toolDescription": "Get descriptive information and current stats of a protocol.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/protocol/{slug}",
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