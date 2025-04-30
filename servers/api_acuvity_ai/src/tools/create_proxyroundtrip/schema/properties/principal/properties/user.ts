import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Identification bit that will be used to identify the origin of the request.").optional()
}