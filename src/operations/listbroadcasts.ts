import { z } from "zod"

export const toolName = `listbroadcasts`
export const toolDescription = `Build schedules and find metadata for TV and radio broadcasts`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/broadcasts`
export const method = `get`
export const security = [
  {
    "key": "api_key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api_key"
  }
]

export const inputParams = z.object({ "query": z.object({ "sort": z.literal("start_date").describe("Sorts:\n* start_date: sort chronologically by scheduled start time/date, ascending\n").optional(), "sort_direction": z.enum(["ascending","descending"]).describe("Sort direction").optional(), "mixin": z.array(z.literal("titles")).describe("Mixins:\n* titles: return ancestor programme titles\n").optional(), "authority": z.array(z.string()).describe("filter for subset of broadcasts that have given authority").optional(), "descendants_of": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of broadcasts that are descendants of the given programme PID").optional(), "end_from": z.string().datetime({ offset: true }).describe("filter for subset of broadcasts that end on or later than the specified datetime").optional(), "end_to": z.string().datetime({ offset: true }).describe("filter for subset of broadcasts that end on or earlier than the specified datetime").optional(), "format": z.array(z.string()).describe("filter for subset of broadcasts that are classified in the given format ID").optional(), "genre": z.array(z.string()).describe("filter for subset of broadcasts that are classified in the given genre ID").optional(), "id": z.array(z.string()).describe("filter for subset of broadcasts that have given identifier").optional(), "item": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of broadcasts with the given item performed on it").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "people": z.string().describe("filter for subset of broadcasts that have given contributor").optional(), "pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of broadcasts having given PID").optional(), "q": z.string().describe("filter for subset of broadcasts matching supplied keyword/phrase (boolean operators permitted)").optional(), "schedule_day": z.string().date().describe("filter for subset of broadcasts that start on the specified day (BBC time)").optional(), "schedule_day_from": z.string().date().describe("filter for subset of broadcasts that start on or after the specified day (BBC time)").optional(), "schedule_day_to": z.string().date().describe("filter for subset of broadcasts that start on or before the specified day (BBC time)").optional(), "service_master_brand": z.array(z.string()).describe("filter for subset of broadcasts with given service master brand").optional(), "sid": z.array(z.string()).describe("filter for subset of broadcasts that are on the specified linear service").optional(), "start_from": z.string().datetime({ offset: true }).describe("filter for subset of broadcasts that start on or later than the specified datetime").optional(), "start_to": z.string().datetime({ offset: true }).describe("filter for subset of broadcasts that start on or earlier than the specified datetime").optional(), "version": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of broadcasts with given PID as their parent version").optional() }).optional() }).shape