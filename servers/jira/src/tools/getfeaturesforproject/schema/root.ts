import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The ID or (case-sensitive) key of the project.")
}