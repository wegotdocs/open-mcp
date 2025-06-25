import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecourseslessons",
  "toolDescription": "Update Lesson",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/courses/lessons/{id}",
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
      "courses_lesson": "courses_lesson"
    }
  },
  inputParamsSchema
}

export default tool