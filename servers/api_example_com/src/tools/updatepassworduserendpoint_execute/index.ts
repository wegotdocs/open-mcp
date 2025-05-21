import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepassworduserendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/users/password/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "encryptedPassword": "encryptedPassword"
    }
  },
  inputParamsSchema
}

export default tool