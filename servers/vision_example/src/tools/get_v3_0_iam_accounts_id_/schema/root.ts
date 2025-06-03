import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(256).describe("The unique identifier of a user in your corporate account identity provider solution.")
}