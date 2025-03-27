import { z } from "zod"

export const toolName = `post_primary_ips`
export const toolDescription = `Create a Primary IP`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/primary_ips`
export const method = `post`
export const security = []

export const inputParams = z.object({}).shape