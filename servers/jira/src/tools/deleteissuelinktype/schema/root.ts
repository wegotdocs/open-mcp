import { z } from "zod"

export const inputParamsSchema = {
  "issueLinkTypeId": z.string().describe("The ID of the issue link type.")
}