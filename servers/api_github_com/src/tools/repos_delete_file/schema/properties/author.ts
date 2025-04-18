import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the author (or committer) of the commit").optional(),
  "email": z.string().describe("The email of the author (or committer) of the commit").optional()
}