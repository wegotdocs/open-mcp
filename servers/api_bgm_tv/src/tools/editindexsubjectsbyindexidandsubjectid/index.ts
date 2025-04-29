import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "editindexsubjectsbyindexidandsubjectid",
  "toolDescription": "Edit subject information in a index",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/indices/{index_id}/subjects/{subject_id}",
  "method": "put",
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
      "index_id": "index_id",
      "subject_id": "subject_id"
    },
    "body": {
      "sort": "sort",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool