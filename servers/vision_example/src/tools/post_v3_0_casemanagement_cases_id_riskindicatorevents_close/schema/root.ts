import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(128).describe("The ID of the case"),
  "status": z.enum(["remediated","dismissed","accepted"]).describe("The new status of the case")
}