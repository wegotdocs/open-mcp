import { z } from "zod"

export const toolName = `servers_account_get_balance`
export const toolDescription = ``
export const baseUrl = `https://api.nexmo.com`
export const path = `/account/get-balance`
export const method = `servers`
export const security = []

export const inputParams = z.object({}).shape