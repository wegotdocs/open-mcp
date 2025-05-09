import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_variant_from_base_and_config",
  "toolDescription": "Add Variant From Base And Config",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/variants/from-base",
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
      "base_id": "base_id",
      "new_variant_name": "new_variant_name",
      "new_config_name": "new_config_name",
      "parameters": "parameters",
      "commit_message": "commit_message"
    }
  },
  inputParamsSchema
}

export default tool