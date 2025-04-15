import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modifyproject",
  "toolDescription": "Modifies a Project.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/projects/{project_id}",
  "method": "patch",
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
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool