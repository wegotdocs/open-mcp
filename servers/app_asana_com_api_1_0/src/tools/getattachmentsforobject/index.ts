import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getattachmentsforobject",
  "toolDescription": "Get attachments from an object",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/attachments",
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
    "query": {
      "limit": "limit",
      "offset": "offset",
      "parent": "parent",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool