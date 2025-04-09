import { z } from "zod"

export const inputParams = {
  "team_id": z.string().describe("ID of the team to list projects from")
}