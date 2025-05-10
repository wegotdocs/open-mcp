import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteresponse",
  "toolDescription": "Deletes a model response with the given ID.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/responses/{response_id}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "response_id": "response_id"
    }
  },
  inputParamsSchema
}

export default tool