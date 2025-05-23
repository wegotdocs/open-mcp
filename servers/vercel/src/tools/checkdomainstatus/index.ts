import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checkdomainstatus",
  "toolDescription": "Check a Domain Availability",
  "baseUrl": "https://api.vercel.com",
  "path": "/v4/domains/status",
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
      "name": "name",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool