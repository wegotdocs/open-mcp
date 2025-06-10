import { z } from "zod"

export const inputParamsSchema = {
  "item": z.string().describe("The item to add to the portfolio."),
  "insert_before": z.string().describe("An id of an item in this portfolio. The new item will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.").optional(),
  "insert_after": z.string().describe("An id of an item in this portfolio. The new item will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.").optional()
}