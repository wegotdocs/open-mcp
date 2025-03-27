import { z } from "zod"

export const toolName = `get_image_png`
export const toolDescription = `Returns a simple PNG image.`
export const baseUrl = `https://httpbin.org`
export const path = `/image/png`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape