import { z } from "zod"

export const toolName = `get_available_tools_me_tools_get`
export const toolDescription = `Get Available Tools`
export const baseUrl = `https://api.example.com`
export const path = `/me/tools`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape