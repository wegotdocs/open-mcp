import { z } from "zod"

export const inputParams = {
  "permaNames": z.array(z.string()).optional(),
  "is1099Vendor": z.boolean().optional(),
  "type": z.enum(["Individual","Business","Unknown"]).optional(),
  "status": z.enum(["Active","Inactive","Unknown"]).optional()
}