import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcustomer",
  "toolDescription": "Create a customer",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/customers",
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
      "customerName": "customerName",
      "firstName": "firstName",
      "lastName": "lastName",
      "email": "email",
      "phone": "phone",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool