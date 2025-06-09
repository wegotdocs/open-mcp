import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_restoreformversions",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions/{id}/versions/restore/{version}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id",
      "version": "version"
    },
    "query": {
      "draft": "draft"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool