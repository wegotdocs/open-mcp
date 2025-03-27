import { z } from "zod"

export const toolName = `parameters_collections_collection_scores_score_`
export const toolDescription = ``
export const baseUrl = `https://api.flat.io/v2`
export const path = `/collections/{collection}/scores/{score}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape