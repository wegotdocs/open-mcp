import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "itemcreate",
  "toolDescription": "Item-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/item",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "minorversion": "minorversion",
      "operation": "operation"
    },
    "body": {
      "Id": "Id",
      "QtyOnHand": "QtyOnHand",
      "InvStartDate": "InvStartDate",
      "IncomeAccountRef": "IncomeAccountRef",
      "Type": "Type",
      "AssetAccountRef": "AssetAccountRef",
      "ExpenseAccountRef": "ExpenseAccountRef",
      "SyncToken": "SyncToken",
      "Sku": "Sku",
      "FullyQualifiedName": "FullyQualifiedName",
      "Name": "Name",
      "Description": "Description",
      "Active": "Active",
      "domain": "domain",
      "TrackQtyOnHand": "TrackQtyOnHand",
      "UnitPrice": "UnitPrice",
      "MetaData": "MetaData"
    }
  },
  inputParamsSchema
}

export default tool