import { z } from "zod"

export const inputParamsSchema = {
  "doctorID": z.string().optional(),
  "facilityID": z.string().optional(),
  "from": z.string().optional(),
  "to": z.string().optional(),
  "okadoc-auth-key": z.string().optional()
}