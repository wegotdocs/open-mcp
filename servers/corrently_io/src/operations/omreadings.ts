import { z } from "zod"

export const toolName = `omreadings`
export const toolDescription = `Public shared smart meters installed in Germany and available for subservices and exploration.`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/alternative/openmeter/readings`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape