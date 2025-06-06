import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_shipping_zones_zone_id_methods_instance_id_",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/shipping/zones/{zone_id}/methods/{instance_id}",
  "method": "put",
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
      "zone_id": "zone_id",
      "instance_id": "instance_id"
    },
    "body": {
      "order": "order",
      "enabled": "enabled",
      "settings": "settings"
    }
  },
  inputParamsSchema
}

export default tool