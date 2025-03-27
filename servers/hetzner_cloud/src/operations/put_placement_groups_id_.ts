import { z } from "zod"

export const toolName = `put_placement_groups_id_`
export const toolDescription = `Update a PlacementGroup`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/placement_groups/{id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the resource") }).optional() }).shape