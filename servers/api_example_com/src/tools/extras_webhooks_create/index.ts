import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_webhooks_create",
  "toolDescription": "Post a list of webhook objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/webhooks/",
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
      "name": "name",
      "description": "description",
      "payload_url": "payload_url",
      "http_method": "http_method",
      "http_content_type": "http_content_type",
      "additional_headers": "additional_headers",
      "body_template": "body_template",
      "secret": "secret",
      "ssl_verification": "ssl_verification",
      "ca_file_path": "ca_file_path",
      "custom_fields": "custom_fields",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool