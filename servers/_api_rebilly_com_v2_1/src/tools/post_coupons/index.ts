import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_coupons",
  "toolDescription": "Create a coupon",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/coupons",
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
      "redemptionCode": "redemptionCode",
      "discount": "discount",
      "restrictions": "restrictions",
      "redemptionsCount": "redemptionsCount",
      "status": "status",
      "description": "description",
      "issuedTime": "issuedTime",
      "expiredTime": "expiredTime",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool