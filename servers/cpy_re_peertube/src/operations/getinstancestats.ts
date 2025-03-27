import { z } from "zod"

export const toolName = `getinstancestats`
export const toolDescription = `Get instance stats`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/server/stats`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape