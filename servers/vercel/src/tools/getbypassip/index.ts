import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbypassip",
  "toolDescription": "Read System Bypass",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/security/firewall/bypass",
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
      "projectId": "projectId",
      "limit": "limit",
      "sourceIp": "sourceIp",
      "domain": "domain",
      "projectScope": "projectScope",
      "offset": "offset",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool