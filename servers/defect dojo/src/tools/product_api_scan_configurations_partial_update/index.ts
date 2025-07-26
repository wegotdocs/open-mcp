import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "product_api_scan_configurations_partial_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/product_api_scan_configurations/{id}/",
  "method": "patch",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
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
      "service_key_1": "service_key_1",
      "service_key_2": "service_key_2",
      "service_key_3": "service_key_3",
      "product": "product",
      "tool_configuration": "tool_configuration"
    }
  },
  inputParamsSchema
}

export default tool