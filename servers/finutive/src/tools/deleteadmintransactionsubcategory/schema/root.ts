import { z } from "zod"

export const inputParamsSchema = {
  "subcategory_id": z.string().describe("ID of the subcategory to delete")
}