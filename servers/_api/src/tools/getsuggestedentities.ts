import { z } from "zod"

export const toolName = `getsuggestedentities`
export const toolDescription = `Suggest entities`
export const baseUrl = `/api`
export const path = `/v1/search/suggest`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "q",
    "index",
    "field",
    "size",
    "fetch_source",
    "include_source_fields",
    "deleted"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "q": z.string().describe("Suggest API can be used to auto-fill the entities name while use is typing search text <br/> 1. To get suggest results pass q=us or q=user etc.. <br/> 2. Do not add any wild-cards such as * like in search api <br/> 3. suggest api is a prefix suggestion <br/>"), "index": z.string(), "field": z.string().describe("Field in object containing valid suggestions. Defaults to 'suggest`. All indices has a `suggest` field, only some indices have other `suggest_*` fields."), "size": z.number().int().describe("Size field to limit the no.of results returned, defaults to 10"), "fetch_source": z.boolean().describe("Get document body for each hit"), "include_source_fields": z.array(z.string()).describe("Get only selected fields of the document body for each hit. Empty value will return all fields").optional(), "deleted": z.boolean() }).shape