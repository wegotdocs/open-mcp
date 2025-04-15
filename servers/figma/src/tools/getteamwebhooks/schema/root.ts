import { z } from "zod"

export const inputParamsSchema = {
  "team_id": z.string().describe("ID of team to get webhooks for")
}