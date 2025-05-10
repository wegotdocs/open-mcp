import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsubjectimagebyid",
  "toolDescription": "Get Subject Image",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/subjects/{subject_id}/image",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "subject_id": "subject_id"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool