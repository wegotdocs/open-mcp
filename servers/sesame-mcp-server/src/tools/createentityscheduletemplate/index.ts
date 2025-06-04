import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createentityscheduletemplate",
  "toolDescription": "Create employee schedule template",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/entity-schedule-templates",
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
      "employeeId": "employeeId",
      "scheduleTemplateId": "scheduleTemplateId",
      "startDate": "startDate",
      "endDate": "endDate"
    }
  },
  inputParamsSchema
}

export default tool