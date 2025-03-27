import { z } from "zod"

export const toolName = `licenses_get`
export const toolDescription = `Get a license`
export const baseUrl = `https://api.github.com`
export const path = `/licenses/{license}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "license": z.string() }).optional() }).shape