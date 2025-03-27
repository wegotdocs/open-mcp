import { z } from "zod"

export const toolName = `get_change_log`
export const toolDescription = `Recent changes`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/change-log`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape