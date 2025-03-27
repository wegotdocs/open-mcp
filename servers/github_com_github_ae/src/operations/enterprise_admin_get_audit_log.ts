import { z } from "zod"

export const toolName = `enterprise_admin_get_audit_log`
export const toolDescription = `Get the audit log for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/audit-log`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "query": z.object({ "phrase": z.string().describe("A search phrase. For more information, see [Searching the audit log](https://docs.github.com/github-ae@latest/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization#searching-the-audit-log).").optional(), "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.").optional(), "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/github-ae@latest/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.").optional(), "order": z.enum(["desc","asc"]).describe("The order of audit log events. To list newest events first, specify `desc`. To list oldest events first, specify `asc`.\n\nThe default is `desc`.").optional(), "page": z.number().int().describe("Page number of the results to fetch."), "per_page": z.number().int().describe("The number of results per page (max 100).") }).optional() }).shape