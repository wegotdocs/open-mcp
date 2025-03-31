import { z } from "zod"

export const toolName = `get_admin_realms_realm_attack_detection_brute_force_users_userid`
export const toolDescription = `Get status of a username in brute force detection`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/attack-detection/brute-force/users/{userId}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "userId": z.string() }).optional() }).shape