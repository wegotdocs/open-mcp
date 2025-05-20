import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_vlan_translation_rules_create",
  "toolDescription": "Post a list of VLAN translation rule objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/vlan-translation-rules/",
  "method": "post",
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