import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().lte(250).describe("The maximum number of items to return.").optional(),
  "cursor": z.string().describe("Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first \"page\" of the collection. See pagination for more detail.").optional()
}