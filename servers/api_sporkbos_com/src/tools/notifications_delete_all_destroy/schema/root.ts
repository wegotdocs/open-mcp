import { z } from "zod"

export const inputParamsSchema = {
  "recipient": z.number().int().describe("Delete all notifications for the user"),
  "team": z.number().int().describe("Delete all notifications for the team")
}