import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refreshentity",
  "toolDescription": "Refresh the entity related to entityRef.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/refresh",
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
      "authorizationToken": "authorizationToken",
      "entityRef": "entityRef"
    }
  },
  inputParamsSchema
}

export default tool