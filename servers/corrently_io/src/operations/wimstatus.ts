import { z } from "zod"

export const toolName = `wimstatus`
export const toolDescription = `WiM Proess Informtion`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/wim/status`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "vid": z.string().describe("VID key of the process.").optional() }).optional() }).shape