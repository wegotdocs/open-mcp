import { z } from "zod"

export const inputParamsSchema = {
  "progGenre": z.string().describe("programme genre ID").optional(),
  "progType": z.string().describe("programme type ID").optional(),
  "progNature": z.string().describe("programme nature ID").optional(),
  "limit": z.string().describe("pagination limit, integer").optional(),
  "skip": z.string().describe("pagination skip, integer").optional(),
  "sort": z.string().optional(),
  "accept-language": z.string().optional()
}