import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_config_deployment_revision",
  "toolDescription": "Get Config Deployment Revision",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/configs/deployment/{deployment_revision_id}",
  "method": "get",
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