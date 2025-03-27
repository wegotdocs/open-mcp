import { z } from "zod"

export const toolName = `get_robots_txt`
export const toolDescription = `Returns some robots.txt rules.`
export const baseUrl = `https://httpbin.org`
export const path = `/robots.txt`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape