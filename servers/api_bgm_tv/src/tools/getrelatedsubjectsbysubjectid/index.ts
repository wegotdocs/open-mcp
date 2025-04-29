import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelatedsubjectsbysubjectid",
  "toolDescription": "Get Subject Relations",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/subjects/{subject_id}/subjects",
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
    }
  },
  inputParamsSchema
}

export default tool