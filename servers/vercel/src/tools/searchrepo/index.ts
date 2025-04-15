import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchrepo",
  "toolDescription": "List git repositories linked to namespace by provider",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/integrations/search-repo",
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
      "query": "query",
      "namespaceId": "namespaceId",
      "provider": "provider",
      "installationId": "installationId",
      "host": "host",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool