import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getteamcomponentsets",
  "toolDescription": "Get team component sets",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/teams/{team_id}/component_sets",
  "method": "get",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
    },
    "query": {
      "page_size": "page_size",
      "after": "after",
      "before": "before"
    }
  },
  inputParamsSchema
}

export default tool