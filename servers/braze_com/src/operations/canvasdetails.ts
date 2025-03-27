import { z } from "zod"

export const toolName = `canvasdetails`
export const toolDescription = `Canvas Details`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/canvas/details`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "canvas_id": z.string().describe("(Required) String\n\nCanvas API Identifier ").optional() }).optional() }).shape