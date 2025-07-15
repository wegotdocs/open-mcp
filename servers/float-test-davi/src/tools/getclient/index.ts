import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getclient",
  "toolDescription": "Retrieve a single client",
  "baseUrl": "https://api.float.com/v3",
  "path": "/clients/{client_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "client_id": "client_id"
    }
  },
  inputParamsSchema
}

export default tool