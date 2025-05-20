import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_module_bay_templates_create",
  "toolDescription": "Post a list of module bay template objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/module-bay-templates/",
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
      "position": "position",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool