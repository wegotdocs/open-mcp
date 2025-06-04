import { z } from "zod"

export const inputParamsSchema = {
  "ProductID": z.string().regex(new RegExp("^([\\d]{10,18})?$")).describe("Product ID"),
  "product_retailer_id": z.string().describe("Product Retailer ID").optional(),
  "currency": z.enum(["USD","EUR","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW","ZWL"]).describe("Currency").optional(),
  "images": z.array(z.union([z.string().describe("Media file URL for upload"), z.string().describe("Base64 encoded file to upload"), z.string().describe("Media file ID")])).min(1).max(10).describe("Product images urls"),
  "availability": z.enum(["in stock","out of stock"]).describe("Product availability").optional(),
  "name": z.string().describe("Product name").optional(),
  "url": z.string().describe("Product url").optional(),
  "description": z.string().describe("Product description").optional(),
  "price": z.number().gte(0).describe("Product price").optional(),
  "is_hidden": z.boolean().describe("Product is hidden").optional()
}