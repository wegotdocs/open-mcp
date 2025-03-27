import { z } from "zod"

export const toolName = `announcement_banners_get_announcement_banner_for_enterprise`
export const toolDescription = `Get announcement banner for enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/announcement`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape