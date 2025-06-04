import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesalary",
  "toolDescription": "Update a salary",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/salaries/{salaryId}",
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
      "salaryId": "salaryId"
    },
    "body": {
      "endDate": "endDate",
      "comments": "comments"
    }
  },
  inputParamsSchema
}

export default tool