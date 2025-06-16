import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_ssh_keys",
  "toolDescription": "Get all SSH keys",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/ssh_keys",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "sort": "sort",
      "name": "name",
      "fingerprint": "fingerprint",
      "label_selector": "label_selector",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool