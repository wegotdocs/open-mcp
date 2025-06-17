import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_invoices_id_",
  "toolDescription": "Create or update an invoice with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/invoices/{id}",
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
      "id": "id",
      "customerId": "customerId",
      "websiteId": "websiteId",
      "organizationId": "organizationId",
      "subscriptionId": "subscriptionId",
      "currency": "currency",
      "amount": "amount",
      "shippingAmount": "shippingAmount",
      "billingAddress": "billingAddress",
      "deliveryAddress": "deliveryAddress",
      "notes": "notes",
      "items": "items",
      "taxes": "taxes",
      "discounts": "discounts",
      "status": "status",
      "delinquentCollectionPeriod": "delinquentCollectionPeriod",
      "collectionPeriod": "collectionPeriod",
      "abandonedTime": "abandonedTime",
      "voidedTime": "voidedTime",
      "paidTime": "paidTime",
      "dueTime": "dueTime",
      "issuedTime": "issuedTime",
      "createdTime": "createdTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool