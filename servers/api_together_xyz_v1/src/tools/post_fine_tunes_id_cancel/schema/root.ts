import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("Fine-tune ID to cancel. A string that starts with `ft-`.")
}