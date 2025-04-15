import { z } from "zod"

export const inputParams = {
  "smid_list": z.array(z.string()).describe("待确认商户号列表，最多20个").optional()
}