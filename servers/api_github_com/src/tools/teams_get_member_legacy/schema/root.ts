import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.number().int().describe("The unique identifier of the team."),
  "username": z.string().describe("The handle for the GitHub user account.")
}