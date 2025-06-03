import { z } from "zod"

export const inputParamsSchema = {
  "exception_id": z.string().describe("Identifier of the exception to delete")
}