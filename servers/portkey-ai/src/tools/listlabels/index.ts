import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listlabels",
  "toolDescription": "List labels",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/labels",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "organisation_id": "organisation_id",
      "workspace_id": "workspace_id",
      "search": "search",
      "current_page": "current_page",
      "page_size": "page_size"
    }
  },
  inputParamsSchema
}

export default tool