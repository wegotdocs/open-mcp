import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Unique alphanumeric string that identifies a script file")
}