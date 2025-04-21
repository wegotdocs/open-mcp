import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteentitybyuid",
  "toolDescription": "Delete a single entity by UID.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/entities/by-uid/{uid}",
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
      "uid": "uid"
    }
  },
  inputParamsSchema
}

export default tool