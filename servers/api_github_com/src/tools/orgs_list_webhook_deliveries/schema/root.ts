import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery."),
  "per_page": z.number().int().describe("The number of results per page (max 100). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "cursor": z.string().describe("Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.").optional()
}