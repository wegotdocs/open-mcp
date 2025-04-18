import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "role_id": z.number().int().describe("The unique identifier of the role.")
}