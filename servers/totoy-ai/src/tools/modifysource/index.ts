import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "modifysource",
  "toolDescription": "Modifies a Source.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/sources/{source_id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "source_id": "source_id"
    },
    "body": {
      "text_content": "text_content",
      "title": "title",
      "backlink": "backlink",
      "valid_from": "valid_from",
      "valid_until": "valid_until",
      "project_id": "project_id",
      "custom_metadata": "custom_metadata"
    }
  },
  inputParamsSchema
}

export default tool