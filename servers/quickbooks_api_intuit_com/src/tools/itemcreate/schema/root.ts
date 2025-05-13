import { z } from "zod"

export const inputParamsSchema = {
  "minorversion": z.string().optional(),
  "operation": z.string().optional(),
  "Id": z.string().describe("Unique identifier for this object. Sort order is ASC by default.").optional(),
  "QtyOnHand": z.number().describe("Quantity on hand of the item.").optional(),
  "InvStartDate": z.string().describe("Start date of the inventory.").optional(),
  "IncomeAccountRef": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `IncomeAccountRef` to the tool, first call the tool `expandSchema` with \"/properties/IncomeAccountRef\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Reference type</property-description>").optional(),
  "Type": z.string().describe("Type of the item.").optional(),
  "AssetAccountRef": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `AssetAccountRef` to the tool, first call the tool `expandSchema` with \"/properties/AssetAccountRef\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Reference type</property-description>").optional(),
  "ExpenseAccountRef": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ExpenseAccountRef` to the tool, first call the tool `expandSchema` with \"/properties/ExpenseAccountRef\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Reference type</property-description>").optional(),
  "SyncToken": z.string().describe("Version number of the object. It is used to lock the object for use by one app at a time.").optional(),
  "Sku": z.string().describe("SKU of the item.").optional(),
  "FullyQualifiedName": z.string().describe("Fully qualified name of the item.").optional(),
  "Name": z.string().describe("Name of the item.").optional(),
  "Description": z.string().describe("Description of the item.").optional(),
  "Active": z.boolean().describe("Whether the item is active.").optional(),
  "domain": z.string().describe("Domain of the item.").optional(),
  "TrackQtyOnHand": z.boolean().describe("Whether to track quantity on hand.").optional(),
  "UnitPrice": z.number().describe("Unit price of the item.").optional(),
  "MetaData": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `MetaData` to the tool, first call the tool `expandSchema` with \"/properties/MetaData\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Descriptive information about the object. The MetaData values are set by Data Services and are read only for all applications.</property-description>").optional()
}