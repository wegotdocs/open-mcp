import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "analyzelocation",
  "toolDescription": "Validate a given location.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/analyze-location",
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
    "body": {
      "catalogFileName": "catalogFileName",
      "location": "location"
    }
  },
  inputParamsSchema
}

export default tool