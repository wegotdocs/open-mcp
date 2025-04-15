import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsource",
  "toolDescription": "Creates a Document or Text Source",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/sources",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
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