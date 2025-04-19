import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validateentity",
  "toolDescription": "Validate that a passed in entity has no errors in schema.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/validate-entity",
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
      "location": "location",
      "entity": "entity"
    }
  },
  inputParamsSchema
}

export default tool