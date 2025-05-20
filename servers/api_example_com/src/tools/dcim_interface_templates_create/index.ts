import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_interface_templates_create",
  "toolDescription": "Post a list of interface template objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/interface-templates/",
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
      "device_type": "device_type",
      "module_type": "module_type",
      "name": "name",
      "label": "label",
      "type": "type",
      "enabled": "enabled",
      "mgmt_only": "mgmt_only",
      "description": "description",
      "bridge": "bridge",
      "poe_mode": "poe_mode",
      "poe_type": "poe_type",
      "rf_role": "rf_role"
    }
  },
  inputParamsSchema
}

export default tool