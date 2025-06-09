import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formdefinitioncontroller_getforms",
  "toolDescription": "Get the list of forms with basic information",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/definitions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "formTypes": "formTypes",
      "includeMyNintexFormsOnly": "includeMyNintexFormsOnly"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool