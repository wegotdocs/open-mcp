import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("The access key's name.").optional(),
  "grants": z.array(z.object({ "bucket": z.string().describe("The name of the bucket."), "permission": z.string().describe("The permission to grant to the user. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string.") })).describe("The list of permissions for the access key.").optional(),
  "access_key": z.string().describe("The Access Key ID used to access a bucket.").readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).describe("The date and time the key was created.").readonly().optional()
}