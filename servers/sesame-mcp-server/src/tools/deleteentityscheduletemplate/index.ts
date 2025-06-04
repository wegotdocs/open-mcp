import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteentityscheduletemplate",
  "toolDescription": "Delete employee schedule template",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/entity-schedule-templates/{entityScheduleTemplateId}",
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
      "entityScheduleTemplateId": "entityScheduleTemplateId"
    }
  },
  inputParamsSchema
}

export default tool