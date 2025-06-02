import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove",
  "toolDescription": "Remove an existing Web3 connection",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/connections/wc/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool