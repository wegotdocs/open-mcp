import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "domains_create_record",
  "toolDescription": "Create a New Domain Record",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/domains/{domain_name}/records",
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
    "path": {
      "domain_name": "domain_name"
    }
  },
  inputParamsSchema
}

export default tool