import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "genai_list_agents",
  "toolDescription": "List Agents",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/gen-ai/agents",
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
      "only_deployed": "only_deployed",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool