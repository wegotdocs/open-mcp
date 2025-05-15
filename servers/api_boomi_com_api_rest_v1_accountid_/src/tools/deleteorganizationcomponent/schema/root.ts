import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the Organization component you are attempting to delete.")
}