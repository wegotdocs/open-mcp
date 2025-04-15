import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_variant_revision",
  "toolDescription": "Get Variant Revision",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/variants/{variant_id}/revisions/{revision_number}",
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
      "variant_id": "variant_id",
      "revision_number": "revision_number"
    }
  },
  inputParamsSchema
}

export default tool