import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configs_fetch",
  "toolDescription": "Configs Fetch",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/variants/configs/fetch",
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
      "environment_ref": "environment_ref",
      "application_ref": "application_ref"
    }
  },
  inputParamsSchema
}

export default tool