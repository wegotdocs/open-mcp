import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(44).describe("The unique alphanumeric string that identifies a custom intelligence report.")
}