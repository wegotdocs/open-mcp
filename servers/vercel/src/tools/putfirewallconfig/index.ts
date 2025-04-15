import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putfirewallconfig",
  "toolDescription": "Put Firewall Configuration",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/security/firewall/config",
  "method": "put",
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
      "firewallEnabled": "firewallEnabled",
      "managedRules": "managedRules",
      "crs": "crs",
      "rules": "rules",
      "ips": "ips"
    }
  },
  inputParamsSchema
}

export default tool