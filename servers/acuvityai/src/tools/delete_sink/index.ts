import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_sink",
  "toolDescription": "Deletes the sink with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/sinks/{id}",
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