import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configs_delete",
  "toolDescription": "Configs Delete",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/variants/configs/delete",
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
      "variant_ref": "variant_ref",
      "application_ref": "application_ref"
    }
  },
  inputParamsSchema
}

export default tool