import { z } from "zod"

export const inputParamsSchema = {
  "is_active_duty": z.boolean().nullable().describe("Is the user currently active duty in the US military").optional(),
  "branch": z.string().nullable().describe("If the user is currently serving in the US military, the branch of the military in which they are serving\nValid values: 'AIR FORCE', 'ARMY', 'COAST GUARD', 'MARINES', 'NAVY', 'UNKNOWN'").optional()
}