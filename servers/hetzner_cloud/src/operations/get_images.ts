import { z } from "zod"

export const toolName = `get_images`
export const toolDescription = `Get all Images`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/images`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "sort": z.enum(["id","id:asc","id:desc","name","name:asc","name:desc","created","created:asc","created:desc"]).describe("Can be used multiple times.").optional(), "type": z.enum(["system","snapshot","backup","app"]).describe("Can be used multiple times.").optional(), "status": z.enum(["available","creating"]).describe("Can be used multiple times. The response will only contain Images matching the status.").optional(), "bound_to": z.string().describe("Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`").optional(), "include_deprecated": z.boolean().describe("Can be used multiple times.").optional(), "name": z.string().describe("Can be used to filter resources by their name. The response will only contain the resources matching the specified name").optional(), "label_selector": z.string().describe("Can be used to filter resources by labels. The response will only contain resources matching the label selector.").optional() }).optional() }).shape