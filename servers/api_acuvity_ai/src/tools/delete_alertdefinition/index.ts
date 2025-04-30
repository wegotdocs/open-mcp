import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_alertdefinition",
  "toolDescription": "Deletes the alert definition with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/alertdefinitions/{id}",
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