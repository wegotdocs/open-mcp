import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this user."),
  "team": z.number().int().describe("Filter the dashboard data based on a specific team ID.")
}