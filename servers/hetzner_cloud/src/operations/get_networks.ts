import { z } from "zod"

export const toolName = `get_networks`
export const toolDescription = `Get all Networks`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/networks`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter networks by their name. The response will only contain the networks matching the specified name.").optional(), "label_selector": z.string().describe("Can be used to filter networks by labels. The response will only contain networks with a matching label selector pattern.").optional() }).optional() }).shape