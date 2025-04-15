import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_get_dockercredentials",
  "toolDescription": "Get Docker Credentials for Container Registry",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry/docker-credentials",
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
      "expiry_seconds": "expiry_seconds",
      "read_write": "read_write"
    }
  },
  inputParamsSchema
}

export default tool