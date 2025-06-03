import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("The unique alphanumeric string that identifies a sweeping task.")
}