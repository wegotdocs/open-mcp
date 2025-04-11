import { z } from "zod"

export const inputParams = {
  "content_type": z.string().nullable().describe("The expected `Content-type` header of the request this signed URL will be valid for.  If provided, the `Content-type` header _must_ be sent with the request when this URL is used, and _must_ be the same as it was when the signed URL was created. Required for all methods _except_ `GET` or `DELETE`.").optional(),
  "expires_in": z.number().int().gte(360).lte(86400).nullable().describe("How long this signed URL will be valid for, in seconds.  If omitted, the URL will be valid for 3600 seconds (1 hour).").optional(),
  "method": z.string().describe("The HTTP method allowed to be used with the pre-signed URL."),
  "name": z.string().describe("The name of the object that will be accessed with the pre-signed URL. This object need not exist, and no error will be returned if it doesn't. This behavior is useful for generating pre-signed URLs to upload new objects to by setting the `method` to `PUT`.")
}