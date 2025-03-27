import { z } from "zod"

export const toolName = `get_delivery_pools`
export const toolDescription = `Get your delivery pools`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/delivery/pools`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape