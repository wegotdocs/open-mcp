import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "volumes_delete_byname",
  "toolDescription": "Delete a Block Storage Volume by Name",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/volumes",
  "method": "delete",
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
      "name": "name",
      "region": "region"
    }
  },
  inputParamsSchema
}

export default tool