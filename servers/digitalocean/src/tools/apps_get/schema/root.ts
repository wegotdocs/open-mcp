import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the app"),
  "name": z.string().describe("The name of the app to retrieve.").optional()
}