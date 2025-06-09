import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "waybill_sendsubwaybill",
  "toolDescription": "ქვე ზედნადების გაგზავნა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/waybills/send-subwaybill",
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
    "path": {
      "language": "language"
    },
    "body": {
      "waybillId": "waybillId",
      "ignore_waybill": "ignore_waybill",
      "object_id": "object_id",
      "operation_id": "operation_id",
      "from_account_id": "from_account_id",
      "fullAmount": "fullAmount",
      "par_id": "par_id",
      "startAddress": "startAddress",
      "endAddress": "endAddress",
      "transId": "transId",
      "tranCostPayer": "tranCostPayer",
      "driverName": "driverName",
      "driverTin": "driverTin",
      "carNumber": "carNumber",
      "transTxt": "transTxt",
      "buyerTin": "buyerTin",
      "checkBuyerTin": "checkBuyerTin",
      "buyerName": "buyerName",
      "transportCoast": "transportCoast",
      "isMed": "isMed",
      "document": "document",
      "description": "description",
      "goodList": "goodList"
    }
  },
  inputParamsSchema
}

export default tool