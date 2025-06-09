import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_getformversions",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions/{id}/versions/{version}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id",
      "version": "version"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool