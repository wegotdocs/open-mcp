import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "revert_deployment_revision",
  "toolDescription": "Revert Deployment Revision",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/configs/deployment/{deployment_revision_id}/revert",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "deployment_revision_id": "deployment_revision_id"
    }
  },
  inputParamsSchema
}

export default tool