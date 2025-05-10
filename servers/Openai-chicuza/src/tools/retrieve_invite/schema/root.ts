import { z } from "zod"

export const inputParamsSchema = {
  "invite_id": z.string().describe("The ID of the invite to retrieve.")
}