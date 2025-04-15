import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_assign_resources",
  "toolDescription": "Assign Resources to a Project",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/projects/{project_id}/resources",
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
    },
    "body": {
      "resources": "resources"
    }
  },
  inputParamsSchema
}

export default tool