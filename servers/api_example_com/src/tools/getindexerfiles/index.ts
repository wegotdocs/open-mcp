import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getindexerfiles",
  "toolDescription": "Get the index files merging info from database and index",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data/index/{useCaseId}/files",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool