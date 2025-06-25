import { z } from "zod"

export const inputParamsSchema = {
  "content": z.string().describe("Content").optional(),
  "created_by_id": z.number().int().describe("The ID of the Team-Membership that created the note. When creating notes via the API, this defaults to the ClickFunnels API default User's Membership ID. You can retrieve a list of available Memberships and their id via the Team resource's memberships property.\n").optional()
}