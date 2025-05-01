import { z } from "zod"

export const inputParamsSchema = {
  "val_id": z.string().uuid().describe("Id of a val"),
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-_.]+$")).min(1).max(48),
  "branchId": z.string().uuid().describe("The branch ID to fork from. If this is not specified, the new branch will be forked from main.").optional()
}