import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_coupons_redemptions",
  "toolDescription": "Redeem a coupon",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/coupons-redemptions",
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
      "id": "id",
      "redemptionCode": "redemptionCode",
      "customerId": "customerId",
      "additionalRestrictions": "additionalRestrictions",
      "redeemedTime": "redeemedTime",
      "canceledTime": "canceledTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool