import { z } from "zod"

export const toolName = `post_admin_realms`
export const toolDescription = `Import a realm. Imports a realm from a full representation of that realm.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.string().base64().optional() }).shape