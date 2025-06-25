import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecoursessections",
  "toolDescription": "Update Section",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/courses/sections/{id}",
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
      "courses_section": "courses_section"
    }
  },
  inputParamsSchema
}

export default tool