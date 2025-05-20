import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_object_types_list",
  "toolDescription": "Read-only list of ObjectTypes.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/object-types/",
  "method": "get",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "app_label": "app_label",
      "id": "id",
      "limit": "limit",
      "model": "model",
      "offset": "offset",
      "ordering": "ordering",
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool