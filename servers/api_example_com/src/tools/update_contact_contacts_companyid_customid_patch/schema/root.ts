import { z } from "zod"

export const inputParamsSchema = {
  "customId": z.string(),
  "companyId": z.string(),
  "tradeName": z.string().describe("contact commercial name").optional(),
  "legalName": z.string().describe("contact legal name").optional(),
  "taxId": z.string().describe("tax id CIF/NIF/VAT").optional(),
  "contact": z.string().optional(),
  "address": z.string().optional(),
  "contactType": z.string().optional(),
  "type": z.string().optional(),
  "accounts": z.array(z.object({ "swift": z.string().optional(), "iban": z.string().optional(), "default": z.boolean().optional() })).describe("contact accounts").optional(),
  "paymentsAccounts": z.array(z.object({ "default": z.boolean(), "currency": z.enum(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ERN","ETB","ETH","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTC","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZMW","ZWG","ZWL"]).describe("An enumeration.").optional(), "details": z.object({ "iban": z.string().describe("International Bank Account Number").optional(), "bic": z.string().describe("Bank Identifier Code").optional(), "swift": z.string().describe("SWIFT code").optional(), "accountNumber": z.string().describe("Account number").optional(), "accountType": z.string().optional(), "routingNumber": z.string().describe("Routing number").optional(), "sortCode": z.string().describe("Sort code").optional(), "institutionNumber": z.string().describe("Institution number").optional(), "transitNumber": z.string().describe("Transit number").optional(), "bankCode": z.string().describe("Local bank identifier code").optional(), "branchCode": z.string().describe("Local branch code").optional(), "bsb": z.string().describe("Australian bank code").optional(), "bankCountryCode": z.string().optional() }).optional() })).describe("contact payments accounts").optional(),
  "additionalInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `additionalInfo` to the tool, first call the tool `expandSchema` with \"/properties/additionalInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "accountingCode": z.string().optional(),
  "paymentMethod": z.string().optional(),
  "paymentTerms": z.number().int().describe("contact payment terms in days").optional(),
  "attributes": z.array(z.object({ "customId": z.string(), "value": z.string(), "valueCustomId": z.string().optional() })).optional()
}