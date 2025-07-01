import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of the Pix transaction scheduled to be canceled.")
}