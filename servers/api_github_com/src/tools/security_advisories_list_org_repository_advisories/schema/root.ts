import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by.").optional(),
  "sort": z.enum(["created","updated","published"]).describe("The property to sort the results by.").optional(),
  "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("The number of advisories to return per page. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "state": z.enum(["triage","draft","published","closed"]).describe("Filter by the state of the repository advisories. Only advisories of this state will be returned.").optional()
}