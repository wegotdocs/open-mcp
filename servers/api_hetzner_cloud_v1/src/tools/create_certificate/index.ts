import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_certificate",
  "toolDescription": "Create a Certificate",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/certificates",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "certificate": "certificate",
      "domain_names": "domain_names",
      "labels": "labels",
      "name": "name",
      "private_key": "private_key",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool