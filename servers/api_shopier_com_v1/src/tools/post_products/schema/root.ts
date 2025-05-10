import { z } from "zod"

export const inputParams = {
  "title": z.string().describe("Title of the product."),
  "description": z.string().describe("Detailed description of the product.").optional(),
  "type": z.enum(["physical","digital"]).describe("Type of the product."),
  "media": z.array(z.object({ "type": z.literal("image").describe("Type of media file."), "url": z.string().describe("The URL of media file. Formats supported: jpg, jpeg, png, bmp."), "placement": z.number().int().gte(1).lte(5).describe("Ranking of the media file in product pages. Send \"1\" for the primary media file.") })).describe("Details of product media files. There can be a maximum of 5 media files."),
  "priceData": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `priceData` to the tool, first call the tool `expandSchema` with \"/properties/priceData\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Details of the price information.</property-description>"),
  "stockQuantity": z.number().int().describe("Stock quantity of the product.").optional(),
  "shippingPayer": z.enum(["sellerPays","buyerPays"]).describe("Represents who pays for shipping during dispatch or delivery."),
  "categories": z.array(z.object({ "categoryId": z.string().describe("The ID of category.").optional() })).describe("List of categories that product belongs to.").optional(),
  "variants": z.array(z.object({ "selectionId": z.array(z.string()).describe("The ID of selection.").optional(), "stockQuantity": z.number().int().describe("Stock quantity of the variant.").optional() })).describe("List of variants of the product.").optional(),
  "options": z.array(z.object({ "optionId": z.string().describe("The ID of option.").optional(), "optionTitle": z.string().describe("The title of option.").optional(), "optionPrice": z.string().describe("The price of option.").optional() })).describe("List of options of the product. There can be a maximum of 3 options.").optional(),
  "singleOption": z.boolean().describe("Represents whether a single option or multiple options can be selected during chekout.").optional(),
  "customListing": z.boolean().describe("Represents whether the listing is a custom or standard one.").optional(),
  "customNote": z.string().describe("Overrides the placeholder for note to seller field. Used for collecting a custom information from the buyer during checkout.").optional(),
  "placementScore": z.number().int().gte(1).describe("Placement score of the product. Products with higher values are placed first in the store.").optional(),
  "dispatchDuration": z.number().int().gte(1).lte(3).describe("Dispatch duration in terms of days from seller to shipping company.").optional()
}