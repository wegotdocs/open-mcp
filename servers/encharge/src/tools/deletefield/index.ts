import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletefield",
  "toolDescription": "Delete Person Field",
  "baseUrl": "https://api.encharge.io/v1",
  "path": "/fields/{fieldName}",
  "method": "delete",
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
      "fieldName": "fieldName"
    }
  },
  inputParamsSchema
}

export default tool