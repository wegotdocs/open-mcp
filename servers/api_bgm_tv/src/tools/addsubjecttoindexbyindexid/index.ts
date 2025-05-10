import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addsubjecttoindexbyindexid",
  "toolDescription": "Add a subject to Index",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/indices/{index_id}/subjects",
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
    "path": {
      "index_id": "index_id"
    },
    "body": {
      "subject_id": "subject_id",
      "sort": "sort",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool