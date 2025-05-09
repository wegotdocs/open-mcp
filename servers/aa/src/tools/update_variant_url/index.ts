import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_variant_url",
  "toolDescription": "Update Variant Url",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/variants/{variant_id}/service",
  "method": "put",
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
      "url": "url",
      "variant_id": "variant_id",
      "commit_message": "commit_message"
    }
  },
  inputParamsSchema
}

export default tool