import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gitnamespaces",
  "toolDescription": "List git namespaces by provider",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/integrations/git-namespaces",
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
      "host": "host",
      "provider": "provider"
    }
  },
  inputParamsSchema
}

export default tool