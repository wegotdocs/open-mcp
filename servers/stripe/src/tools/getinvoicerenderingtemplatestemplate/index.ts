import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinvoicerenderingtemplatestemplate",
  "toolDescription": "Retrieve an invoice rendering template",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/invoice_rendering_templates/{template}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "template": "template"
    },
    "query": {
      "expand": "expand",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool