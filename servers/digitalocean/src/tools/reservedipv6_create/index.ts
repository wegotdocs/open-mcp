import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reservedipv6_create",
  "toolDescription": "[Public Preview] Create a New Reserved IPv6",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/reserved_ipv6",
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
    "body": {
      "region_slug": "region_slug"
    }
  },
  inputParamsSchema
}

export default tool