import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_get_supported_networks_api_networks_get",
  "toolDescription": "🌐 Retrieve the networks supported by our API.",
  "baseUrl": "https://api.example.com",
  "path": "/api/networks",
  "method": "get",
  "security": [
    {
      "key": "x-api-key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool