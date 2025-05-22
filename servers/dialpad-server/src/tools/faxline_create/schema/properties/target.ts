import { z } from "zod"

export const inputParamsSchema = {
  "target_id": z.number().int().nullable().describe("The ID of the target to assign the fax line to."),
  "target_type": z.enum(["department","user"]).nullable().describe("Type of the target to assign the fax line to.")
}