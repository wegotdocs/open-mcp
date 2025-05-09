import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_variant_from_url",
  "toolDescription": "Add Variant From Url Route",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/apps/{app_id}/variant/from-service",
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
      "url": "url",
      "commit_message": "commit_message",
      "base_name": "base_name",
      "config_name": "config_name"
    }
  },
  inputParamsSchema
}

export default tool