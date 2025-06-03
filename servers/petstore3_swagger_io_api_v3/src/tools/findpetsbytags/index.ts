import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findpetsbytags",
  "toolDescription": "Finds Pets by tags.",
  "baseUrl": "https://petstore3.swagger.io/api/v3",
  "path": "/pet/findByTags",
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
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool