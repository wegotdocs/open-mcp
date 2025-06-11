import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getglobalknowledgebasearticles",
  "toolDescription": "Lists global knowledge base articles",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/knowledgebase/global/articles",
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
      "articleName": "articleName",
      "includeArchived": "includeArchived"
    }
  },
  inputParamsSchema
}

export default tool