import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getentitybyname",
  "toolDescription": "Get an entity by an entity ref.",
  "baseUrl": "https://api.example.com",
  "path": "/entities/by-name/{kind}/{namespace}/{name}",
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
      "kind": "kind",
      "namespace": "namespace",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool