import { z } from "zod"

export const inputParams = {
  "isv_pid": z.string().describe("服务商pid").optional(),
  "oppor_id": z.string().describe("商机作业Id").optional()
}