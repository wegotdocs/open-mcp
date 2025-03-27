import { z } from "zod"

export const toolName = `apps_create_from_manifest`
export const toolDescription = `Create a GitHub App from a manifest`
export const baseUrl = `https://api.github.com`
export const path = `/app-manifests/{code}/conversions`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "code": z.string() }).optional() }).shape