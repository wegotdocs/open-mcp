import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deploy_to_environment",
  "toolDescription": "Deploy To Environment",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/environments/deploy",
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
    "body": {
      "environment_name": "environment_name",
      "variant_id": "variant_id",
      "commit_message": "commit_message"
    }
  },
  inputParamsSchema
}

export default tool