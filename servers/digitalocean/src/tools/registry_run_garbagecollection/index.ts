import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_run_garbagecollection",
  "toolDescription": "Start Garbage Collection",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry/{registry_name}/garbage-collection",
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
      "registry_name": "registry_name"
    }
  },
  inputParamsSchema
}

export default tool