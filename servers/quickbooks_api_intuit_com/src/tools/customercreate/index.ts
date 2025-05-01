import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customercreate",
  "toolDescription": "Customer-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/customer",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "Id": "Id",
      "SyncToken": "SyncToken",
      "DisplayName": "DisplayName",
      "Title": "Title",
      "GivenName": "GivenName",
      "MiddleName": "MiddleName",
      "Suffix": "Suffix",
      "FamilyName": "FamilyName",
      "PrimaryEmailAddr": "PrimaryEmailAddr",
      "ResaleNum": "ResaleNum",
      "SecondaryTaxIdentifier": "SecondaryTaxIdentifier",
      "ARAccountRef": "ARAccountRef",
      "DefaultTaxCodeRef": "DefaultTaxCodeRef",
      "PreferredDeliveryMethod": "PreferredDeliveryMethod",
      "GSTIN": "GSTIN",
      "SalesTermRef": "SalesTermRef",
      "CustomerTypeRef": "CustomerTypeRef",
      "Fax": "Fax",
      "BillWithParent": "BillWithParent",
      "Mobile": "Mobile",
      "PrimaryPhone": "PrimaryPhone",
      "AlternatePhone": "AlternatePhone",
      "MetaData": "MetaData",
      "ParentRef": "ParentRef",
      "WebAddr": "WebAddr",
      "ShipAddr": "ShipAddr",
      "PaymentMethodRef": "PaymentMethodRef",
      "BillAddr": "BillAddr",
      "Job": "Job",
      "BalanceWithJobs": "BalanceWithJobs",
      "OpenBalanceDate": "OpenBalanceDate",
      "Taxable": "Taxable",
      "Notes": "Notes",
      "Active": "Active",
      "CompanyName": "CompanyName",
      "Balance": "Balance",
      "IsProject": "IsProject",
      "Source": "Source",
      "PrimaryTaxIdentifier": "PrimaryTaxIdentifier",
      "GSTRegistrationType": "GSTRegistrationType",
      "PrintOnCheckName": "PrintOnCheckName",
      "FullyQualifiedName": "FullyQualifiedName",
      "Level": "Level",
      "TaxExemptionReasonId": "TaxExemptionReasonId"
    }
  },
  inputParamsSchema
}

export default tool