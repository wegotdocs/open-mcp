import { z } from "zod"

export const toolName = `patch_data_cache_billing_settings`
export const toolDescription = ``
export const baseUrl = `https://api.vercel.com`
export const path = `/data-cache/billing-settings`
export const method = `patch`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "excessBillingEnabled"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "excessBillingEnabled": z.boolean().optional() }).shape