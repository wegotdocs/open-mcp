import { z } from "zod"

export const toolName = `delete_admin_realms_realm_attack_detection_brute_force_users_use`
export const toolDescription = `Clear any user login failures for the user This can release temporary disabled user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/attack-detection/brute-force/users/{userId}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "userId": z.string() }).optional() }).shape