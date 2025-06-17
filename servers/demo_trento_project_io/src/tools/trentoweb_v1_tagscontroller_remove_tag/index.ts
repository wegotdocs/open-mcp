import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_tagscontroller_remove_tag",
  "toolDescription": "Remove tag",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/sap_systems/{id}/tags/{value}",
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
    "path": {
      "id": "id",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool