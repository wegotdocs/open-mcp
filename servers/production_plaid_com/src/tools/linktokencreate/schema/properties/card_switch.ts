import { z } from "zod"

export const inputParamsSchema = {
  "card_bin": z.string().describe("The BIN (Bank Identification Number) of the card to switch.")
}