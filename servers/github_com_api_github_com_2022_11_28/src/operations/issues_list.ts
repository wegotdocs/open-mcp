import { z } from "zod"

export const toolName = `issues_list`
export const toolDescription = `List issues assigned to the authenticated user`
export const baseUrl = `https://github.com`
export const path = `/issues`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "filter": z.enum(["assigned","created","mentioned","subscribed","repos","all"]).describe("Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation."), "state": z.enum(["open","closed","all"]).describe("Indicates the state of the issues to return."), "labels": z.string().describe("A list of comma separated label names. Example: `bug,ui,@high`").optional(), "sort": z.enum(["created","updated","comments"]).describe("What to sort results by."), "direction": z.enum(["asc","desc"]).describe("The direction to sort the results by."), "since": z.string().datetime({ offset: true }).describe("Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(), "collab": z.boolean().optional(), "orgs": z.boolean().optional(), "owned": z.boolean().optional(), "pulls": z.boolean().optional(), "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape