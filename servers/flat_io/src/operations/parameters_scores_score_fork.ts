import { z } from "zod"

export const toolName = `parameters_scores_score_fork`
export const toolDescription = ``
export const baseUrl = `https://api.flat.io/v2`
export const path = `/scores/{score}/fork`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape