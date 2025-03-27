import { z } from "zod"

export const toolName = `get_ip`
export const toolDescription = `Returns the requester's IP Address.`
export const baseUrl = `https://httpbin.org`
export const path = `/ip`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape