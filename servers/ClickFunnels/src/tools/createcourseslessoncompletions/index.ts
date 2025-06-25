import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcourseslessoncompletions",
  "toolDescription": "Create Lesson Completion",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/courses/{course_id}/lesson_completions",
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
      "course_id": "course_id"
    },
    "body": {
      "courses_lesson_completion": "courses_lesson_completion"
    }
  },
  inputParamsSchema
}

export default tool