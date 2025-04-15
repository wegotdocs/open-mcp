import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "domains_list_records",
  "toolDescription": "List All Domain Records",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/domains/{domain_name}/records",
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
    },
    "query": {
      "name": "name",
      "type": "type",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool