import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("The identifier of the role to delete.")
}