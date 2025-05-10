import { z } from "zod"

export const inputParams = {
  "client_platform": z.string().describe("客户端").optional()
}