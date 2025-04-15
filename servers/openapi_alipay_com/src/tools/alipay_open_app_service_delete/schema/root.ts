import { z } from "zod"

export const inputParams = {
  "service_code": z.string().describe("服务id").optional()
}