import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_shipping_zones_id_locations",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/shipping/zones/{id}/locations",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "code": "code",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool