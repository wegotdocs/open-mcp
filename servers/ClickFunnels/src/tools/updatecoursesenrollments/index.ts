import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecoursesenrollments",
  "toolDescription": "Update Enrollment",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/courses/enrollments/{id}",
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
      "courses_enrollment": "courses_enrollment"
    }
  },
  inputParamsSchema
}

export default tool