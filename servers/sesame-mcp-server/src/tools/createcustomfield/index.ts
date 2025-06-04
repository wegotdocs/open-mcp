import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcustomfield",
  "toolDescription": "Create a custom field",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/custom-fields",
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
      "slug": "slug",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool