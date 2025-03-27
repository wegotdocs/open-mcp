import { z } from "zod"

export const toolName = `gettime`
export const toolDescription = `Get the service time`
export const baseUrl = `https://rest.ably.io`
export const path = `/time`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape