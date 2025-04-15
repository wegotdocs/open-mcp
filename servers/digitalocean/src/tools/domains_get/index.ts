import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "domains_get",
  "toolDescription": "Retrieve an Existing Domain",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/domains/{domain_name}",
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
    "path": {
      "domain_name": "domain_name"
    }
  },
  inputParamsSchema
}

export default tool