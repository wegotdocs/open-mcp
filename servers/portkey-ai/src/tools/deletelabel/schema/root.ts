import { z } from "zod"

export const inputParamsSchema = {
  "labelId": z.string().uuid().describe("ID of the label to delete")
}