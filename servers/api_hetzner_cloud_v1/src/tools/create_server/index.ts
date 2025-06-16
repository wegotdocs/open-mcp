import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_server",
  "toolDescription": "Create a Server",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers",
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
    "body": {
      "automount": "automount",
      "datacenter": "datacenter",
      "firewalls": "firewalls",
      "image": "image",
      "labels": "labels",
      "location": "location",
      "name": "name",
      "networks": "networks",
      "placement_group": "placement_group",
      "public_net": "public_net",
      "server_type": "server_type",
      "ssh_keys": "ssh_keys",
      "start_after_create": "start_after_create",
      "user_data": "user_data",
      "volumes": "volumes"
    }
  },
  inputParamsSchema
}

export default tool