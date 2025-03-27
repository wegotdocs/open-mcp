import { z } from "zod"

export const toolName = `getclientthumbnail`
export const toolDescription = `OAuth Client Thumbnail View`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/oauth-clients/{clientId}/thumbnail`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape