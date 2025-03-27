import { z } from "zod"

export const toolName = `get_primary_ips`
export const toolDescription = `Get all Primary IPs`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/primary_ips`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter resources by their name. The response will only contain the resources matching the specified name").optional(), "label_selector": z.string().describe("Can be used to filter resources by labels. The response will only contain resources matching the label selector.").optional(), "ip": z.string().describe("Can be used to filter resources by their ip. The response will only contain the resources matching the specified ip.").optional(), "sort": z.enum(["id","id:asc","id:desc","created","created:asc","created:desc"]).describe("Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc").optional() }).optional() }).shape