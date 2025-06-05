import { z } from "zod"

export const inputParamsSchema = {
  "recipient": z.number().int().describe("Mark all notifications as read for the user"),
  "team": z.number().int().describe("Mark all notifications as read for the team")
}