import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsource",
  "toolDescription": "Retrieves a Source.",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/sources/{source_id}",
  "method": "get",
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