import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_tagscontroller_add_tag_2_",
  "toolDescription": "Add tag",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/hosts/{id}/tags",
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
    "path": {
      "id": "id"
    },
    "body": {
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool