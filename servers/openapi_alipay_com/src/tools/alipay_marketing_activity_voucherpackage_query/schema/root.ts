import { z } from "zod"

export const inputParams = {
  "voucher_package_id": z.string().describe("券包id").optional()
}