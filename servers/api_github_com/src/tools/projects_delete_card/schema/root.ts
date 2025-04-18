import { z } from "zod"

export const inputParamsSchema = {
  "card_id": z.number().int().describe("The unique identifier of the card.")
}