import { z } from "zod"

export const toolName = `parameters_classes_class_students_user_submissions`
export const toolDescription = ``
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/students/{user}/submissions`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape