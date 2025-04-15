import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletesource",
  "toolDescription": "Deletes a Source.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/sources/{source_id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool