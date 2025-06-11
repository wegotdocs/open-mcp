import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getknowledgebasefoldercontent",
  "toolDescription": "Returns knowledge base folder",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/knowledgebase/folder/{folderId}",
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
    "path": {
      "folderId": "folderId"
    },
    "query": {
      "includeArchived": "includeArchived"
    }
  },
  inputParamsSchema
}

export default tool