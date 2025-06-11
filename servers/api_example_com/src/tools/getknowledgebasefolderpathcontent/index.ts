import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getknowledgebasefolderpathcontent",
  "toolDescription": "Returns knowledge base folder",
  "baseUrl": "https://api.example.com",
  "path": "/v2/knowledgebase/folder",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "query": {
      "folderPath": "folderPath",
      "folderId": "folderId",
      "organizationId": "organizationId"
    }
  },
  inputParamsSchema
}

export default tool