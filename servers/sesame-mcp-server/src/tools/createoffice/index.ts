import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createoffice",
  "toolDescription": "Create a office",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/offices",
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
      "companyId": "companyId",
      "name": "name",
      "address": "address",
      "coordinates": "coordinates",
      "description": "description",
      "radio": "radio"
    }
  },
  inputParamsSchema
}

export default tool