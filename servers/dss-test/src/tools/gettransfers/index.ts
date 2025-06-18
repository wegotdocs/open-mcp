import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettransfers",
  "toolDescription": "List transfers",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/api/v1/transfers",
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
    "query": {
      "status": "status",
      "statuses[]": "statuses[]",
      "institution_id": "institution_id"
    }
  },
  inputParamsSchema
}

export default tool