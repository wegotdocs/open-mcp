import { z } from "zod"

export const inputParamsSchema = {
  "dateCreatedLe[ge]": z.string().describe("Filter by initial creation date").optional(),
  "dateCreatedLe[le]": z.string().describe("Filter by final creation date").optional(),
  "transferDate[ge]": z.string().describe("Filter by the initial transfer effective date").optional(),
  "transferDate[le]": z.string().describe("Filter by transfer end date").optional(),
  "type": z.string().describe("Filter by transfer type").optional()
}