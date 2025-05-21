import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trunk_update_api_v1_trunk_patch",
  "toolDescription": "Trunk Update",
  "baseUrl": "https://mcp.intelepeer-ops.com/v1",
  "path": "/api/v1/trunk/",
  "method": "patch",
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
      "name": "name",
      "cac": "cac",
      "policy": "policy",
      "signaling": "signaling",
      "services": "services",
      "egressIpPrefix": "egressIpPrefix",
      "ingressIpPrefix": "ingressIpPrefix"
    }
  },
  inputParamsSchema
}

export default tool