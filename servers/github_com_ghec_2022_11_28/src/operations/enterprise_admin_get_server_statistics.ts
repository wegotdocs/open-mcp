import { z } from "zod"

export const toolName = `enterprise_admin_get_server_statistics`
export const toolDescription = `Get GitHub Enterprise Server statistics`
export const baseUrl = `https://github.com`
export const path = `/enterprise-installation/{enterprise_or_org}/server-statistics`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise_or_org": z.string().describe("The slug version of the enterprise name or the login of an organization.") }).optional(), "query": z.object({ "date_start": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.").optional(), "date_end": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.").optional() }).optional() }).shape