import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteclient",
  "toolDescription": "Delete a client",
  "baseUrl": "https://api.float.com/v3",
  "path": "/clients/{client_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "client_id": "client_id"
    }
  },
  inputParamsSchema
}

export default tool