import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addpet",
  "toolDescription": "Add a new pet to the store.",
  "baseUrl": "https://petstore3.swagger.io/api/v3/",
  "path": "/pet",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "category": "category",
      "photoUrls": "photoUrls",
      "tags": "tags",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool