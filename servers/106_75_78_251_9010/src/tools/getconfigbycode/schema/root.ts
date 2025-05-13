import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("接口编码")
}