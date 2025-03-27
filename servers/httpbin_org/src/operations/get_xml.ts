import { z } from "zod"

export const toolName = `get_xml`
export const toolDescription = `Returns a simple XML document.`
export const baseUrl = `https://httpbin.org`
export const path = `/xml`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape