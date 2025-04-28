import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getslug",
  "toolDescription": "Get the slug most similar to the given text.",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_slug",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "text": "text"
    }
  },
  inputParamsSchema
}

export default tool