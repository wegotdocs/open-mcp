import { z } from "zod"

export const inputParamsSchema = {
  "LabelID": z.string().regex(new RegExp("^([\\d]{1,2})?$")).describe("Label ID")
}