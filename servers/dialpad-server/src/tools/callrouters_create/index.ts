import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "callrouters_create",
  "toolDescription": "Call Router -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/callrouters",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "default_target_id": "default_target_id",
      "default_target_type": "default_target_type",
      "enabled": "enabled",
      "name": "name",
      "office_id": "office_id",
      "routing_url": "routing_url",
      "secret": "secret"
    }
  },
  inputParamsSchema
}

export default tool