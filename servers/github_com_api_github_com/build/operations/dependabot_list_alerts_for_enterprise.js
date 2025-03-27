import { z } from "zod";
export const toolName = `dependabot_list_alerts_for_enterprise`;
export const toolDescription = `List Dependabot alerts for an enterprise`;
export const baseUrl = `https://api.github.com`;
export const path = `/enterprises/{enterprise}/dependabot/alerts`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "query": z.object({ "state": z.string().describe("A comma-separated list of states. If specified, only alerts with these states will be returned.\n\nCan be: `dismissed`, `fixed`, `open`").optional(), "severity": z.string().describe("A comma-separated list of severities. If specified, only alerts with these severities will be returned.\n\nCan be: `low`, `medium`, `high`, `critical`").optional(), "ecosystem": z.string().describe("A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.\n\nCan be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`").optional(), "package": z.string().describe("A comma-separated list of package names. If specified, only alerts for these packages will be returned.").optional(), "scope": z.enum(["development", "runtime"]).describe("The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.").optional(), "sort": z.enum(["created", "updated"]).describe("The property by which to sort the results.\n`created` means when the alert was created.\n`updated` means when the alert's state last changed."), "direction": z.enum(["asc", "desc"]).describe("The direction to sort the results by."), "before": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.").optional(), "after": z.string().describe("A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.").optional(), "first": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the first matching result.\nThis parameter must not be used in combination with `last`.\nInstead, use `per_page` in combination with `after` to fetch the first page of results."), "last": z.number().int().gte(1).lte(100).describe("**Deprecated**. The number of results per page (max 100), starting from the last matching result.\nThis parameter must not be used in combination with `first`.\nInstead, use `per_page` in combination with `before` to fetch the last page of results.").optional(), "per_page": z.number().int().describe("The number of results per page (max 100).") }).optional() }).shape;
