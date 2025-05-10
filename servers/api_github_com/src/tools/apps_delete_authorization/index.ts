import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_delete_authorization",
  "toolDescription": "Delete an app authorization",
  "baseUrl": "https://api.github.com",
  "path": "/applications/{client_id}/grant",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "client_id": "client_id"
    },
    "body": {
      "access_token": "access_token"
    }
  },
  inputParamsSchema
}

export default tool