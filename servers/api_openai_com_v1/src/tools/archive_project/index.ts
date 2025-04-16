import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "archive_project",
  "toolDescription": "Archives a project in the organization. Archived projects cannot be used or updated.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/archive",
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
      "project_id": "project_id"
    }
  },
  inputParamsSchema
}

export default tool