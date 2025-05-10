import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_pagedataview",
  "toolDescription": "Deletes the page data view with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/pagedataviews/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool