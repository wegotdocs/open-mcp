import { z } from "zod"

export const toolName = `destiny2_awaprovideauthorizationresult`
export const toolDescription = `Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Destiny2/Awa/AwaProvideAuthorizationResult/`
export const method = `post`
export const security = []

export const inputParams = z.object({}).shape