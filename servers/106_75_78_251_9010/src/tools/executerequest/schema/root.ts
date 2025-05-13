import { z } from "zod"

export const inputParamsSchema = {
  "apiType": z.string().describe("接口类型")
}