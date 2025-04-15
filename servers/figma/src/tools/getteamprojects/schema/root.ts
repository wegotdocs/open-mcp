import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.string().describe("ID of the team to list projects from")
}