import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinstitutions",
  "toolDescription": "List institutions",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/api/v1/institutions",
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
      "institutionsLegacy[]": "institutionsLegacy[]",
      "search": "search",
      "tenant": "tenant",
      "aet": "aet"
    }
  },
  inputParamsSchema
}

export default tool