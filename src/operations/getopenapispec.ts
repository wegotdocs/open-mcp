import { z } from "zod"

export const toolName = `getopenapispec`
export const toolDescription = `Returns the OpenAPI Specification document.`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/openapi.json`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape