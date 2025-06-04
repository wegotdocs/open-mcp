import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecompany",
  "toolDescription": "Update a company",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/companies/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "name": "name",
      "notificationEmail": "notificationEmail",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool