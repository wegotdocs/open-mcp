import { z } from "zod"

export const toolName = `billing_get_shared_storage_billing_ghe`
export const toolDescription = `Get shared storage billing for an enterprise`
export const baseUrl = `https://github.com`
export const path = `/enterprises/{enterprise}/settings/billing/shared-storage`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape