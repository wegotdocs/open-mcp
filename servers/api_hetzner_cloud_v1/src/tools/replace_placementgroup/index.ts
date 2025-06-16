import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "replace_placementgroup",
  "toolDescription": "Update a PlacementGroup",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/placement_groups/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "labels": "labels",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool