import { z } from "zod"

export const inputParamsSchema = {
  "namespace_name": z.string(),
  "next_page_token": z.string().describe("Token to retrieve the next page of results").optional()
}