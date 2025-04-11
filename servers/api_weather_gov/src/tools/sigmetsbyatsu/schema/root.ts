import { z } from "zod"

export const inputParams = {
  "atsu": z.string().regex(new RegExp("^[A-Z]{3,4}$")).describe("ATSU Identifier")
}