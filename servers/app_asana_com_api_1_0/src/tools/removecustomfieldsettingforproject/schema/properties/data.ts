import { z } from "zod"

export const inputParamsSchema = {
  "custom_field": z.string().describe("The custom field to remove from this portfolio.")
}