import { z } from "zod"

export const toolName = `gettodosv1`
export const toolDescription = `Get all todos`
export const baseUrl = `https://api.example.com`
export const path = `/todos`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape