import { z } from "zod"

export const inputParams = {
  "main_title": z.string().describe("副标题。").optional(),
  "sub_title": z.string().describe("副标题").optional()
}