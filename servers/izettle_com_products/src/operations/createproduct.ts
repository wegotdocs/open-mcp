import { z } from "zod"

export const toolName = `createproduct`
export const toolDescription = `Create a new product`
export const baseUrl = `https://products.izettle.com`
export const path = `/organizations/{organizationUuid}/products`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "organizationUuid": z.string().uuid() }).optional(), "query": z.object({ "returnEntity": z.boolean() }).optional(), "body": z.object({ "categories": z.array(z.string()).optional(), "category": z.object({ "name": z.string().min(0).max(100), "uuid": z.string().uuid() }).optional(), "createWithDefaultTax": z.boolean().optional(), "description": z.string().min(0).max(1024).optional(), "externalReference": z.string().min(0).max(128).optional(), "imageLookupKeys": z.array(z.string()).optional(), "metadata": z.object({ "inPos": z.boolean(), "source": z.object({ "external": z.boolean().optional(), "name": z.string().optional() }).optional() }).optional(), "name": z.string().min(1).max(256), "online": z.object({ "description": z.string().min(0).max(3500).optional(), "presentation": z.object({ "additionalImageUrls": z.array(z.string()).min(0).max(25).optional(), "displayImageUrl": z.string().optional(), "mediaUrls": z.array(z.string()).min(0).max(8).optional() }).optional(), "seo": z.object({ "metaDescription": z.string().min(0).max(320).optional(), "slug": z.string().min(1).max(256).optional(), "title": z.string().min(0).max(256).optional() }).optional(), "shipping": z.object({ "shippingPricingModel": z.enum(["FREE","STANDARD"]).optional(), "weight": z.object({ "unit": z.enum(["kg","g","oz","lb"]), "weight": z.number().gte(0) }).optional(), "weightInGrams": z.number().int().gte(0).lte(2147483647).optional() }).optional(), "status": z.enum(["ACTIVE","HIDDEN"]), "title": z.string().min(0).max(256).optional() }).optional(), "presentation": z.object({ "backgroundColor": z.string().optional(), "imageUrl": z.string().optional(), "textColor": z.string().optional() }).optional(), "taxCode": z.string().optional(), "taxExempt": z.boolean().optional(), "taxRates": z.array(z.string().uuid()).optional(), "unitName": z.string().min(0).max(32).optional(), "uuid": z.string().uuid(), "variantOptionDefinitions": z.object({ "definitions": z.array(z.object({ "name": z.string().min(1).max(30), "properties": z.array(z.object({ "imageUrl": z.string().min(1).max(256).optional(), "value": z.string().min(1).max(256) })).min(1).max(99) })).min(1).max(3) }).optional(), "variants": z.array(z.object({ "barcode": z.string().min(0).max(128).optional(), "costPrice": z.object({ "amount": z.number().int().gte(0), "currencyId": z.enum(["AED","AFA","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZM","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CSD","CUC","CUP","CVE","CYP","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHC","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MTL","MUR","MVR","MWK","MXN","MYR","MZM","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDD","SDG","SEK","SGD","SHP","SIT","SKK","SLL","SOS","SPL","SRD","SSP","STD","SVC","SYP","SZL","THB","TJS","TMM","TMT","TND","TOP","TRL","TRY","TTD","TVD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEB","VEF","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPD","XPF","XPT","YER","ZAR","ZMK","ZMW","ZWD","ZWL"]) }).optional(), "description": z.string().min(0).max(1024).optional(), "name": z.string().min(0).max(256).optional(), "options": z.array(z.object({ "name": z.string().min(1).max(30), "value": z.string().min(1).max(256) })).min(1).max(99).optional(), "presentation": z.object({ "backgroundColor": z.string().optional(), "imageUrl": z.string().optional(), "textColor": z.string().optional() }).optional(), "price": z.object({ "amount": z.number().int().gte(0), "currencyId": z.enum(["AED","AFA","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZM","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYR","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CSD","CUC","CUP","CVE","CYP","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHC","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MTL","MUR","MVR","MWK","MXN","MYR","MZM","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDD","SDG","SEK","SGD","SHP","SIT","SKK","SLL","SOS","SPL","SRD","SSP","STD","SVC","SYP","SZL","THB","TJS","TMM","TMT","TND","TOP","TRL","TRY","TTD","TVD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEB","VEF","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPD","XPF","XPT","YER","ZAR","ZMK","ZMW","ZWD","ZWL"]) }).optional(), "sku": z.string().min(0).max(64).optional(), "uuid": z.string().uuid() })).optional(), "vatPercentage": z.number().gte(0).lte(100).optional() }).optional() }).shape