import { z } from "zod"

export const inputParams = {
  "label": z.string().min(1).max(48).describe("__Filterable__ The name of the disk. This is for display purposes only.").optional()
}