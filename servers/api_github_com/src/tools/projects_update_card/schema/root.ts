import { z } from "zod"

export const inputParamsSchema = {
  "card_id": z.number().int().describe("The unique identifier of the card."),
  "note": z.string().nullable().describe("The project card's note").optional(),
  "archived": z.boolean().describe("Whether or not the card is archived").optional()
}