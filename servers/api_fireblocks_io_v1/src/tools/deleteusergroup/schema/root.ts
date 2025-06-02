import { z } from "zod"

export const inputParamsSchema = {
  "groupId": z.string().describe("The ID of the user group")
}