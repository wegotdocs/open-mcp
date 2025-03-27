import { z } from "zod"

export const toolName = `ocppsessions`
export const toolDescription = `Last Session Info`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/alternative/ocpp/lastSessions`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape