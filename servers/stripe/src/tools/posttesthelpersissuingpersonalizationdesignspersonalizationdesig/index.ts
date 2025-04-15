import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "posttesthelpersissuingpersonalizationdesignspersonalizationdesig",
  "toolDescription": "Reject a testmode personalization design",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject",
  "method": "post",
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
      "personalization_design": "personalization_design"
    }
  },
  inputParamsSchema
}

export default tool