import { z } from "zod"

export const toolName = `parameters_admin_realms_realm_attack_detection_brute_force_users`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/attack-detection/brute-force/users/{userId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape