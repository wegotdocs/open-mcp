import { z } from "zod"

export const toolName = `createtodov1`
export const toolDescription = `Create a new todo`
export const baseUrl = `https://api.example.com`
export const path = `/todos`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "title": z.string().describe("The title of the todo") }).optional() }).shape