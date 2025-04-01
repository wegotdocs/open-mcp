import { z } from "zod"

export const toolName = `gethealth`
export const toolDescription = `Get health status of the API`
export const baseUrl = `https://token-api.thegraph.com`
export const path = `/health`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape