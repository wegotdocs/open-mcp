import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_devices_update",
  "toolDescription": "Put a device object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/devices/{id}/",
  "method": "put",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "device_type": "device_type",
      "role": "role",
      "tenant": "tenant",
      "platform": "platform",
      "serial": "serial",
      "asset_tag": "asset_tag",
      "site": "site",
      "location": "location",
      "rack": "rack",
      "position": "position",
      "face": "face",
      "latitude": "latitude",
      "longitude": "longitude",
      "status": "status",
      "airflow": "airflow",
      "primary_ip4": "primary_ip4",
      "primary_ip6": "primary_ip6",
      "oob_ip": "oob_ip",
      "cluster": "cluster",
      "virtual_chassis": "virtual_chassis",
      "vc_position": "vc_position",
      "vc_priority": "vc_priority",
      "description": "description",
      "comments": "comments",
      "config_template": "config_template",
      "local_context_data": "local_context_data",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool