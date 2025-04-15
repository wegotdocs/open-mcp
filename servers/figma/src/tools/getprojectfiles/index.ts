import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojectfiles",
  "toolDescription": "Get files in a project",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/projects/{project_id}/files",
  "method": "get",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "project_id": "project_id"
    },
    "query": {
      "branch_data": "branch_data"
    }
  },
  inputParamsSchema
}

export default tool