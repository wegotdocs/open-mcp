import { z } from "zod"

export const inputParams = {
  "team_id": z.string().describe("ID of team to get webhooks for")
}