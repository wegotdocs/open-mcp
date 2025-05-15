import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_v1_businesses_businessid_participants_participantid_",
  "toolDescription": "Delete a participant",
  "baseUrl": "https://api.fincar.com.au/sandbox",
  "path": "/v1/businesses/{businessId}/participants/{participantId}",
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
      "participantId": "participantId",
      "businessId": "businessId"
    }
  },
  inputParamsSchema
}

export default tool