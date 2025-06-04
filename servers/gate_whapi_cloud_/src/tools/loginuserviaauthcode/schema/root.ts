import { z } from "zod"

export const inputParamsSchema = {
  "PhoneNumber": z.string().regex(new RegExp("^([\\d]{7,15})?$")).describe("Contact ID")
}