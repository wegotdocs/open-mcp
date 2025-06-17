import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_coupons_redemptioncode_expiration",
  "toolDescription": "Set a coupon's expiration time.",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/coupons/{redemptionCode}/expiration",
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
      "expiredTime": "expiredTime"
    }
  },
  inputParamsSchema
}

export default tool