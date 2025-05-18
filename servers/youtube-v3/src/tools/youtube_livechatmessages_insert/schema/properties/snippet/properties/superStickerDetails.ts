import { z } from "zod"

export const inputParamsSchema = {
  "amountDisplayString": z.string().describe("A rendered string that displays the fund amount and currency to the user.").optional(),
  "amountMicros": z.string().describe("The amount purchased by the user, in micros (1,750,000 micros = 1.75).").optional(),
  "currency": z.string().describe("The currency in which the purchase was made.").optional(),
  "superStickerMetadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `superStickerMetadata` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/superStickerDetails/properties/superStickerMetadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Information about the Super Sticker.</property-description>").optional(),
  "tier": z.number().int().describe("The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.").optional()
}