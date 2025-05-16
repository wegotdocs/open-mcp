import { z } from "zod"

export const inputParamsSchema = {
  "doctorID": z.string().optional(),
  "facilityID": z.string().optional(),
  "okadoc-auth-key": z.string().optional()
}