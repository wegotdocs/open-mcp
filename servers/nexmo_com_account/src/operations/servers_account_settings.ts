import { z } from "zod"

export const toolName = `servers_account_settings`
export const toolDescription = ``
export const baseUrl = `https://api.nexmo.com`
export const path = `/account/settings`
export const method = `servers`
export const security = []

export const inputParams = z.object({}).shape