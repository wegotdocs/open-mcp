import { z } from "zod"

export const toolName = `get_contribution_refinement_types`
export const toolDescription = `List valid contribution refinement types`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/contribution-refinement-types`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape