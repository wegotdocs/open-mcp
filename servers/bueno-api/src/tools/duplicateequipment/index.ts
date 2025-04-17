import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "duplicateequipment",
  "toolDescription": "Duplicate Equipment",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equips/{equipId}/duplicate",
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
    "path": {
      "equipId": "equipId"
    },
    "body": {
      "name": "name",
      "duplicatePoints": "duplicatePoints",
      "duplicateDataStreamMappings": "duplicateDataStreamMappings",
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool