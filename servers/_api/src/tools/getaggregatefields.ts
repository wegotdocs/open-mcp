import { z } from "zod"

export const toolName = `getaggregatefields`
export const toolDescription = `Get aggregated fields`
export const baseUrl = `/api`
export const path = `/v1/search/aggregate`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "index",
    "field",
    "value",
    "q",
    "size",
    "deleted"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "index": z.string(), "field": z.string().describe("Field in an entity.").optional(), "value": z.string().describe("value for searching in aggregation"), "q": z.string().describe("Search Query Text, Pass *text* for substring match; Pass without wildcards for exact match. <br/> 1. For listing all tables or topics pass q=* <br/>2. For search tables or topics pass q=*search_term* <br/>3. For searching field names such as search by column_name pass q=column_names:address <br/>4. For searching by tag names pass q=tags:user.email <br/>5. When user selects a filter pass q=query_text AND tags:user.email AND platform:MYSQL <br/>6. Search with multiple values of same filter q=tags:user.email AND tags:user.address <br/> logic operators such as AND and OR must be in uppercase "), "size": z.number().int().describe("Size field to limit the no.of results returned, defaults to 10"), "deleted": z.string() }).shape