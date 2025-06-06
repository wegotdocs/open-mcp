import { z } from "zod"

export const inputParamsSchema = {
  "enquiryId": z.number().int()
}