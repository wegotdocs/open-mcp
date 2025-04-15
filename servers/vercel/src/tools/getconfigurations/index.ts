import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getconfigurations",
  "toolDescription": "Get configurations for the authenticated user or team",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/integrations/configurations",
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
      "view": "view",
      "installationType": "installationType",
      "integrationIdOrSlug": "integrationIdOrSlug",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool