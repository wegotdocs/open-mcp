import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproject",
  "toolDescription": "Update a project",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/projects/{id}",
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
      "parentProjectId": "parentProjectId",
      "customerId": "customerId",
      "price": "price",
      "startDate": "startDate",
      "endDate": "endDate",
      "managerId": "managerId",
      "description": "description",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool