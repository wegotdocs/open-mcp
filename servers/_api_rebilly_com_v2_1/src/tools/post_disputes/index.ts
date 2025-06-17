import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_disputes",
  "toolDescription": "Create a dispute",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/disputes",
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
      "customerId": "customerId",
      "transactionId": "transactionId",
      "currency": "currency",
      "amount": "amount",
      "acquirerReferenceNumber": "acquirerReferenceNumber",
      "reasonCode": "reasonCode",
      "category": "category",
      "type": "type",
      "status": "status",
      "postedTime": "postedTime",
      "deadlineTime": "deadlineTime",
      "rawResponse": "rawResponse",
      "resolvedTime": "resolvedTime",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool