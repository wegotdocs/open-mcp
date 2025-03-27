import { z } from "zod"

export const toolName = `parameters_classes_class_assignments_assignment_submissions`
export const toolDescription = ``
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/assignments/{assignment}/submissions`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape