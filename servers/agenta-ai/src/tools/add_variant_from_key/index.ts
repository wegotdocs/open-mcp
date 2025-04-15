import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_variant_from_key",
  "toolDescription": "Add Variant From Key Route",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/apps/{app_id}/variant/from-template",
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
      "app_id": "app_id"
    },
    "body": {
      "variant_name": "variant_name",
      "key": "key",
      "commit_message": "commit_message",
      "base_name": "base_name",
      "config_name": "config_name"
    }
  },
  inputParamsSchema
}

export default tool