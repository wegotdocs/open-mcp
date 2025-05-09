import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mark_variant_revision_as_hidden",
  "toolDescription": "Remove Variant Revision",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/variants/{variant_id}/revisions/{revision_id}",
  "method": "delete",
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
      "revision_id": "revision_id"
    }
  },
  inputParamsSchema
}

export default tool