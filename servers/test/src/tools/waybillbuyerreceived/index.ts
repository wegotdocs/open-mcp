import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "waybillbuyerreceived",
  "toolDescription": "მყიდველის მიერ მიღებული ზედნადებები",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/waybills/buyer-received",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "language": "language"
    },
    "query": {
      "statuses": "statuses",
      "car_number": "car_number",
      "seller_tin": "seller_tin",
      "itypes": "itypes",
      "begin_date_start": "begin_date_start",
      "begin_date_end": "begin_date_end",
      "create_date_start": "create_date_start",
      "create_date_end": "create_date_end",
      "driver_tin": "driver_tin",
      "delivery_date_start": "delivery_date_start",
      "delivery_date_end": "delivery_date_end",
      "full_amount": "full_amount",
      "waybill_number": "waybill_number",
      "close_date_start": "close_date_start",
      "close_date_end": "close_date_end",
      "user_ids": "user_ids",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool