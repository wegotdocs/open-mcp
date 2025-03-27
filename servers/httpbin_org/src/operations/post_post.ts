import { z } from "zod"

export const toolName = `post_post`
export const toolDescription = `The request's POST parameters.`
export const baseUrl = `https://httpbin.org`
export const path = `/post`
export const method = `post`
export const security = []

export const inputParams = z.object({}).shape