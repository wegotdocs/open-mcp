import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().optional(),
  "tags": z.string().optional(),
  "name": z.string().optional(),
  "projectId": z.string().optional(),
  "excludePinnedData": z.boolean().describe("Set this to avoid retrieving pinned data").optional(),
  "limit": z.number().lte(250).describe("The maximum number of items to return.").optional(),
  "cursor": z.string().describe("Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Default value fetches the first \"page\" of the collection. See pagination for more detail.").optional()
}