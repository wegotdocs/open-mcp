import { z } from "zod";
export const toolName = `creditnotesadd`;
export const toolDescription = `Create Credit Note`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/accounting/credit-notes`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({ "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "account": z.object({ "code": z.string().nullable().describe("The code assigned to the account.").optional(), "id": z.string().describe("The unique identifier for the account.").optional(), "name": z.string().nullable().describe("The name of the account.").readonly().optional(), "nominal_code": z.string().nullable().describe("The nominal code of the account.").optional() }).nullable().optional(), "allocations": z.array(z.any()).optional(), "balance": z.number().nullable().describe("The balance reflecting any payments made against the transaction.").optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "currency": z.enum(["UNKNOWN_CURRENCY", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRC", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMK", "ZMW", "BTC", "ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "currency_rate": z.number().nullable().describe("Currency Exchange Rate at the time entity was recorded/generated.").optional(), "customer": z.object({ "company_name": z.string().nullable().describe("The company name of the customer.").readonly().optional(), "display_id": z.string().nullable().describe("The display ID of the customer.").readonly().optional(), "display_name": z.string().nullable().describe("The display name of the customer.").optional(), "id": z.string().describe("The ID of the customer this entity is linked to.") }).nullable().describe("The customer this entity is linked to.").optional(), "date_issued": z.string().datetime({ offset: true }).describe("Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD").optional(), "date_paid": z.string().datetime({ offset: true }).nullable().describe("Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD").optional(), "id": z.string().describe("Unique identifier representing the entity").readonly(), "line_items": z.array(z.object({ "code": z.string().nullable().describe("User defined item code").optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "department_id": z.string().nullable().describe("Department id").optional(), "description": z.string().nullable().describe("User defined description").optional(), "discount_amount": z.number().nullable().describe("Discount amount applied to the line item when supported downstream.").optional(), "discount_percentage": z.number().nullable().describe("Discount percentage applied to the line item when supported downstream.").optional(), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "item": z.object({ "code": z.string().nullable().describe("User defined item code").readonly().optional(), "id": z.string().nullable().describe("ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item").optional(), "name": z.string().nullable().describe("User defined item name").readonly().optional() }).optional(), "ledger_account": z.object({ "code": z.string().nullable().describe("The code assigned to the account.").optional(), "id": z.string().describe("The unique identifier for the account.").optional(), "name": z.string().nullable().describe("The name of the account.").readonly().optional(), "nominal_code": z.string().nullable().describe("The nominal code of the account.").optional() }).nullable().optional(), "line_number": z.number().int().nullable().describe("Line number in the invoice").optional(), "location_id": z.string().nullable().describe("Location id").optional(), "quantity": z.number().nullable().optional(), "row_id": z.string().describe("Row ID").optional(), "row_version": z.string().nullable().describe("A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.").optional(), "tax_amount": z.number().nullable().describe("Tax amount").optional(), "tax_rate": z.object({ "code": z.string().nullable().describe("Tax rate code").readonly().optional(), "id": z.string().nullable().describe("The ID of the object.").optional(), "name": z.string().nullable().describe("Name of the tax rate").readonly().optional(), "rate": z.number().nullable().describe("Rate of the tax rate").readonly().optional() }).optional(), "total_amount": z.number().nullable().describe("Total amount of the line item").optional(), "type": z.enum(["sales_item", "discount", "info", "sub_total"]).nullable().describe("Item type").optional(), "unit_of_measure": z.string().nullable().describe("Description of the unit type the item is sold as, ie: kg, hour.").optional(), "unit_price": z.number().nullable().optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict()).optional(), "note": z.string().nullable().describe("Optional note to be associated with the credit note.").optional(), "number": z.string().nullable().describe("Credit note number.").optional(), "reference": z.string().nullable().describe("Optional reference message ie: Debit remittance detail.").optional(), "remaining_credit": z.number().nullable().describe("Indicates the total credit amount still available to apply towards the payment.").optional(), "row_version": z.string().nullable().describe("A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.").optional(), "status": z.enum(["draft", "authorised", "paid", "voided", "deleted"]).describe("Status of credit notes").optional(), "sub_total": z.number().nullable().describe("Sub-total amount, normally before tax.").optional(), "tax_code": z.string().nullable().describe("Applicable tax id/code override if tax is not supplied on a line item basis.").optional(), "tax_inclusive": z.boolean().nullable().describe("Amounts are including tax").optional(), "terms": z.string().nullable().describe("Optional terms to be associated with the credit note.").optional(), "total_amount": z.number().describe("Amount of transaction"), "total_tax": z.number().nullable().describe("Total tax amount applied to this invoice.").optional(), "type": z.enum(["accounts_receivable_credit", "accounts_payable_credit"]).describe("Type of payment").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict().optional() }).shape;
