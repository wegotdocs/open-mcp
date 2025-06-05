import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this user."),
  "team": z.number().int().describe("Filter users by team ID.")
}