import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepetwithform",
  "toolDescription": "Updates a pet in the store with form data.",
  "baseUrl": "/api/v3",
  "path": "/pet/{petId}",
  "method": "post",
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
      "petId": "petId"
    },
    "query": {
      "name": "name",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool