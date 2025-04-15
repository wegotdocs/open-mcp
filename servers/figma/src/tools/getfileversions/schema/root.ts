import { z } from "zod"

export const inputParamsSchema = {
  "file_key": z.string().describe("File to get version history from. This can be a file key or branch key. Use `GET /v1/files/:key` with the `branch_data` query param to get the branch key."),
  "page_size": z.number().lte(50).describe("The number of items returned in a page of the response. If not included, `page_size` is `30`.").optional(),
  "before": z.number().describe("A version ID for one of the versions in the history. Gets versions before this ID. Used for paginating. If the response is not paginated, this link returns the same data in the current response.").optional(),
  "after": z.number().describe("A version ID for one of the versions in the history. Gets versions after this ID. Used for paginating. If the response is not paginated, this property is not included.").optional()
}