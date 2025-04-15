import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patchedgeconfigitems",
  "toolDescription": "Update Edge Config items in batch",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/edge-config/{edgeConfigId}/items",
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
      "edgeConfigId": "edgeConfigId"
    },
    "query": {
      "dryRun": "dryRun",
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "items": "items",
      "definition": "definition"
    }
  },
  inputParamsSchema
}

export default tool