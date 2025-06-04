import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproject",
  "toolDescription": "Create a project",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/projects",
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
      "companyId": "companyId",
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