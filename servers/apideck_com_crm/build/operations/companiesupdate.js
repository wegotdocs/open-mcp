import { z } from "zod";
export const toolName = `companiesupdate`;
export const toolDescription = `Update company`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/crm/companies/{id}`;
export const method = `patch`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "body": z.object({ "abn_branch": z.string().nullable().describe("An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.").optional(), "abn_or_tfn": z.string().nullable().describe("An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.").optional(), "acn": z.string().nullable().describe("The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.").optional(), "addresses": z.array(z.object({ "city": z.string().nullable().describe("Name of city.").optional(), "contact_name": z.string().nullable().optional(), "country": z.string().nullable().describe("country code according to ISO 3166-1 alpha-2.").optional(), "county": z.string().nullable().describe("Address field that holds a sublocality, such as a county").optional(), "email": z.string().nullable().optional(), "fax": z.string().nullable().optional(), "id": z.string().nullable().optional(), "latitude": z.string().nullable().optional(), "line1": z.string().nullable().describe("Line 1 of the address e.g. number, street, suite, apt #, etc.").optional(), "line2": z.string().nullable().describe("Line 2 of the address").optional(), "line3": z.string().nullable().describe("Line 3 of the address").optional(), "line4": z.string().nullable().describe("Line 4 of the address").optional(), "longitude": z.string().nullable().optional(), "name": z.string().nullable().optional(), "phone_number": z.string().nullable().optional(), "postal_code": z.string().nullable().describe("Zip code or equivalent.").optional(), "row_version": z.string().nullable().describe("A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.").optional(), "salutation": z.string().nullable().optional(), "state": z.string().nullable().describe("Name of state").optional(), "street_number": z.string().nullable().describe("Street number").optional(), "string": z.string().nullable().optional(), "type": z.enum(["primary", "secondary", "home", "office", "shipping", "billing", "other"]).optional(), "website": z.string().nullable().optional() }).strict()).optional(), "annual_revenue": z.string().nullable().describe("Annual revenue").optional(), "bank_accounts": z.array(z.object({ "account_name": z.string().nullable().describe("The name which you used in opening your bank account.").optional(), "account_number": z.string().nullable().describe("A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number.").optional(), "account_type": z.enum(["bank_account", "credit_card", "other"]).nullable().describe("The type of bank account.").optional(), "bank_code": z.string().nullable().describe("A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions.").optional(), "bic": z.string().nullable().optional(), "branch_identifier": z.string().nullable().describe("A branch identifier is a unique identifier for a branch of a bank or financial institution.").optional(), "bsb_number": z.string().nullable().describe("A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution.").optional(), "currency": z.enum(["UNKNOWN_CURRENCY", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRC", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMK", "ZMW", "BTC", "ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "iban": z.string().nullable().optional() }).strict()).optional(), "birthday": z.string().date().nullable().describe("The date of birth of the person.").optional(), "created_at": z.string().datetime({ offset: true }).readonly().optional(), "created_by": z.string().nullable().readonly().optional(), "currency": z.enum(["UNKNOWN_CURRENCY", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRC", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMK", "ZMW", "BTC", "ETH"]).nullable().describe("Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).").optional(), "custom_fields": z.array(z.object({ "description": z.string().describe("More information about the custom field").optional(), "id": z.string(), "name": z.string().describe("Name of the custom field.").optional(), "value": z.union([z.string().nullable(), z.number().nullable(), z.boolean().nullable(), z.array(z.string())]).optional() }).strict()).optional(), "deleted": z.boolean().readonly().optional(), "description": z.string().nullable().optional(), "emails": z.array(z.object({ "email": z.string().email().min(1), "id": z.string().optional(), "type": z.enum(["primary", "secondary", "work", "personal", "billing", "other"]).optional() }).strict()).optional(), "fax": z.string().nullable().optional(), "first_name": z.string().nullable().describe("The first name of the person.").optional(), "id": z.string().readonly().optional(), "image": z.string().nullable().optional(), "industry": z.string().nullable().describe("Industry").optional(), "interaction_count": z.number().int().nullable().readonly().optional(), "last_activity_at": z.string().datetime({ offset: true }).nullable().readonly().optional(), "last_name": z.string().nullable().describe("The last name of the person.").optional(), "name": z.string().min(1), "number_of_employees": z.string().nullable().describe("Number of employees").optional(), "owner_id": z.string().optional(), "ownership": z.string().nullable().describe("Ownership").optional(), "parent_id": z.string().describe("Parent ID").readonly().optional(), "payee_number": z.string().nullable().optional(), "phone_numbers": z.array(z.object({ "area_code": z.string().nullable().optional(), "country_code": z.string().nullable().optional(), "extension": z.string().nullable().optional(), "id": z.string().nullable().optional(), "number": z.string().min(1), "type": z.enum(["primary", "secondary", "home", "work", "office", "mobile", "assistant", "fax", "direct-dial-in", "personal", "other"]).optional() }).strict()).optional(), "read_only": z.boolean().nullable().optional(), "row_type": z.object({ "id": z.string().optional(), "name": z.string().optional() }).optional(), "sales_tax_number": z.string().nullable().optional(), "salutation": z.string().nullable().describe("A formal salutation for the person. For example, 'Mr', 'Mrs'").optional(), "social_links": z.array(z.object({ "id": z.string().nullable().optional(), "type": z.string().nullable().optional(), "url": z.string().min(1) }).strict()).optional(), "status": z.string().nullable().optional(), "tags": z.array(z.string()).optional(), "updated_at": z.string().datetime({ offset: true }).readonly().optional(), "updated_by": z.string().nullable().readonly().optional(), "vat_number": z.string().nullable().describe("VAT number").optional(), "websites": z.array(z.object({ "id": z.string().nullable().optional(), "type": z.enum(["primary", "secondary", "work", "personal", "other"]).optional(), "url": z.string().min(1) }).strict()).optional() }).strict().optional() }).shape;
