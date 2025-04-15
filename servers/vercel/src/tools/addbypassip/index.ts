import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addbypassip",
  "toolDescription": "Create System Bypass Rule",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/security/firewall/bypass",
  "method": "post",
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
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "domain": "domain",
      "projectScope": "projectScope",
      "sourceIp": "sourceIp",
      "allSources": "allSources",
      "ttl": "ttl",
      "note": "note"
    }
  },
  inputParamsSchema
}

export default tool