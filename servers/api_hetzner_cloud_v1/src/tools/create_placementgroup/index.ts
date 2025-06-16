import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_placementgroup",
  "toolDescription": "Create a PlacementGroup",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/placement_groups",
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
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool