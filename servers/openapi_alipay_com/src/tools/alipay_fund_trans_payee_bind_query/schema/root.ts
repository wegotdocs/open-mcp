import { z } from "zod"

export const inputParams = {
  "identity": z.string().describe("证件号").optional(),
  "identity_type": z.string().describe("证件类型,暂仅支持 IDENTITY_CARD （身份证）").optional()
}