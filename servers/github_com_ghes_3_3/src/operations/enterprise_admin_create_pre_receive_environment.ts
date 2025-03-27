import { z } from "zod"

export const toolName = `enterprise_admin_create_pre_receive_environment`
export const toolDescription = `Create a pre-receive environment`
export const baseUrl = `https://github.com`
export const path = `/admin/pre-receive-environments`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "image_url": z.string().describe("URL from which to download a tarball of this environment."), "name": z.string().describe("The new pre-receive environment's name.") }).optional() }).shape