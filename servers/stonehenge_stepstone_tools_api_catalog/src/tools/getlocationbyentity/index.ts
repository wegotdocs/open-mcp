import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlocationbyentity",
  "toolDescription": "Get a location for entity.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/locations/by-entity/{kind}/{namespace}/{name}",
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
    "path": {
      "kind": "kind",
      "namespace": "namespace",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool