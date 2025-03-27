import { z } from "zod"

export const toolName = `get_certificates`
export const toolDescription = `Get all Certificates`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/certificates`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "sort": z.enum(["id","id:asc","id:desc","name","name:asc","name:desc","created","created:asc","created:desc"]).describe("Can be used multiple times.").optional(), "name": z.string().describe("Can be used to filter resources by their name. The response will only contain the resources matching the specified name").optional(), "label_selector": z.string().describe("Can be used to filter resources by labels. The response will only contain resources matching the label selector.").optional(), "type": z.enum(["uploaded","managed"]).describe("Can be used multiple times. The response will only contain Certificates matching the type.").optional() }).optional() }).shape