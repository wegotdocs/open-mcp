import { z } from "zod"

export const toolName = `post_admin_realms_realm_client_description_converter`
export const toolDescription = `Base path for importing clients under this realm.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-description-converter`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.string().optional() }).shape