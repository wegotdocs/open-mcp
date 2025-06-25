import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createformssubmissionsanswers",
  "toolDescription": "Create Answer",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/forms/submissions/{submission_id}/answers",
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
      "submission_id": "submission_id"
    },
    "body": {
      "forms_submissions_answer": "forms_submissions_answer"
    }
  },
  inputParamsSchema
}

export default tool