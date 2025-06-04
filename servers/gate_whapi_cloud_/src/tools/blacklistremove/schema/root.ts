import { z } from "zod"

export const inputParamsSchema = {
  "ContactID": z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID")
}