import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "information_links_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/information-links/",
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
    "query": {
      "page_location": "page_location"
    }
  },
  inputParamsSchema
}

export default tool