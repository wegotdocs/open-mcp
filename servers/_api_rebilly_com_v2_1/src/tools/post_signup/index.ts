import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_signup",
  "toolDescription": "Creates a new user and sends an email confirmation",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/signup",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "email": "email",
      "company": "company",
      "firstName": "firstName",
      "lastName": "lastName",
      "businessPhone": "businessPhone",
      "password": "password",
      "website": "website",
      "currencies": "currencies",
      "merchantCategoryCode": "merchantCategoryCode"
    }
  },
  inputParamsSchema
}

export default tool