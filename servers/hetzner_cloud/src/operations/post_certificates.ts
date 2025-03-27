import { z } from "zod"

export const toolName = `post_certificates`
export const toolDescription = `Create a Certificate`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/certificates`
export const method = `post`
export const security = []

export const inputParams = z.object({}).shape