import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_coupons_redemptioncode_",
  "toolDescription": "Create or update a coupon with predefined redemption code",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/coupons/{redemptionCode}",
  "method": "put",
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