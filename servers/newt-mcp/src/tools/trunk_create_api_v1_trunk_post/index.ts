import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trunk_create_api_v1_trunk_post",
  "toolDescription": "Trunk Create",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/trunk/",
  "method": "post",
  "security": [
    {
      "key": "session_id",
      "value": "<mcp-env-var>SESSION_ID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSION_ID"
    }
  ],
  "paramsMap": {
    "body": {
      "Name": "Name",
      "CAC": "CAC",
      "CPS": "CPS",
      "IpSignalingProfile": "IpSignalingProfile",
      "PacketServiceProfile": "PacketServiceProfile",
      "IngressIpPrefix": "IngressIpPrefix",
      "EgressIpPrefix": "EgressIpPrefix",
      "Zone": "Zone"
    }
  },
  inputParamsSchema
}

export default tool