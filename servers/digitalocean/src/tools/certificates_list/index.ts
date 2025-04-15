import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "certificates_list",
  "toolDescription": "List All Certificates",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/certificates",
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
      "per_page": "per_page",
      "page": "page",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool