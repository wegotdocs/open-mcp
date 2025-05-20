import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_vlan_translation_rules_update",
  "toolDescription": "Put a VLAN translation rule object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/vlan-translation-rules/{id}/",
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
      "policy": "policy",
      "local_vid": "local_vid",
      "remote_vid": "remote_vid",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool