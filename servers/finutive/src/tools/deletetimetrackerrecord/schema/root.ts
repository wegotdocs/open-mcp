import { z } from "zod"

export const inputParamsSchema = {
  "id_remove": z.string().describe("ID of the record to delete")
}