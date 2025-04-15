import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configs_list",
  "toolDescription": "Configs List",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/variants/configs/list",
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
      "application_ref": "application_ref"
    }
  },
  inputParamsSchema
}

export default tool