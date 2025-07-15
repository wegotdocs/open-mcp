import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateclient",
  "toolDescription": "Update a client's name, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/clients/{client_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "client_id": "client_id"
    }
  },
  inputParamsSchema
}

export default tool