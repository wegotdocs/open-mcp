import { z } from "zod"

export const inputParamsSchema = {
  "logged_time_id": z.string().describe("Unique ID of the specific logged time entry to be deleted")
}