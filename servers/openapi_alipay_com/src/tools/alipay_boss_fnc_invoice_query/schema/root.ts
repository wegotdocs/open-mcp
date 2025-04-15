import { z } from "zod"

export const inputParams = {
  "invoice_id": z.string().describe("查询ID：用于标示一张发票，通过发票综合查询可以查询到该ID。").optional()
}