import { z } from "zod"

export const inputParamsSchema = {
  "card_id": z.number().int().describe("The unique identifier of the card."),
  "position": z.string().regex(new RegExp("^(?:top|bottom|after:\\d+)$")).describe("The position of the card in a column. Can be one of: `top`, `bottom`, or `after:<card_id>` to place after the specified card."),
  "column_id": z.number().int().describe("The unique identifier of the column the card should be moved to").optional()
}