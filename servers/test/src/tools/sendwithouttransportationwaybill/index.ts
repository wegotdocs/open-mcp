import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendwithouttransportationwaybill",
  "toolDescription": "ტრანსპორტირების გარეშე ზედნადებების გაგზავნა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/waybills/send-waybill-without-transportation",
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
      "operation_id": "operation_id",
      "object_id": "object_id",
      "fullAmount": "fullAmount",
      "startAddress": "startAddress",
      "currency": "currency",
      "endAddress": "endAddress",
      "transId": "transId",
      "tranCostPayer": "tranCostPayer",
      "driverName": "driverName",
      "driverTin": "driverTin",
      "carNumber": "carNumber",
      "transTxt": "transTxt",
      "document": "document",
      "description": "description",
      "buyerTin": "buyerTin",
      "checkBuyerTin": "checkBuyerTin",
      "buyerName": "buyerName",
      "transportCoast": "transportCoast",
      "isMed": "isMed",
      "checkDriverTin": "checkDriverTin",
      "goodList": "goodList"
    }
  },
  inputParamsSchema
}

export default tool