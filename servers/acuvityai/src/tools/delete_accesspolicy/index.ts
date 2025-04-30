import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_accesspolicy",
  "toolDescription": "Deletes the access policy with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/accesspolicies/{id}",
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