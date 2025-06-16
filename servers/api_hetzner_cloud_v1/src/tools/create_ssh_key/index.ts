import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_ssh_key",
  "toolDescription": "Create an SSH key",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/ssh_keys",
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
      "labels": "labels",
      "name": "name",
      "public_key": "public_key"
    }
  },
  inputParamsSchema
}

export default tool