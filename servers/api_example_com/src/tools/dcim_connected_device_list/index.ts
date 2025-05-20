import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_connected_device_list",
  "toolDescription": "This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer\ninterface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors\nvia a protocol such",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/connected-device/",
  "method": "get",
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
    "query": {
      "peer_device": "peer_device",
      "peer_interface": "peer_interface"
    }
  },
  inputParamsSchema
}

export default tool