import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addclient",
  "toolDescription": "Add a new client",
  "baseUrl": "https://api.float.com/v3",
  "path": "/clients",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "client_id": "client_id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool