import { z } from "zod"

export const toolName = `servers_account_register_sender`
export const toolDescription = ``
export const baseUrl = `https://api.nexmo.com`
export const path = `/account/register-sender`
export const method = `servers`
export const security = []

export const inputParams = z.object({}).shape