import { z } from "zod"

export const toolName = `get_artifact_formats`
export const toolDescription = `Artifact formats`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/artifact-formats`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape