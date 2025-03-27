import { z } from "zod"

export const toolName = `getconfig`
export const toolDescription = `Get instance public configuration`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/config`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape