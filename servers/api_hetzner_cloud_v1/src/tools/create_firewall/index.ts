import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_firewall",
  "toolDescription": "Create a Firewall",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/firewalls",
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
      "apply_to": "apply_to",
      "labels": "labels",
      "name": "name",
      "rules": "rules"
    }
  },
  inputParamsSchema
}

export default tool