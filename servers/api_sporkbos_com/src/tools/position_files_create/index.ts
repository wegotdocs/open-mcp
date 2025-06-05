import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "position_files_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/position-files/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "file": "file",
      "position": "position",
      "name": "name",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool