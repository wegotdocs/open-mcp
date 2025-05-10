import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the organization that owns the service."),
  "serviceId": z.string().uuid().describe("ID of the service to update password."),
  "newPasswordHash": z.string().describe("Optional password hash. Used to avoid password transmission over network. If not provided a new password is generated and is provided in the response. Otherwise this hash is used. Algorithm: echo -n \"yourpassword\" | sha256sum | tr -d '-' | xxd -r -p | base64").optional(),
  "newDoubleSha1Hash": z.string().describe("Optional double SHA1 password hash for MySQL protocol. If newPasswordHash is not provided this key will be ignored and the generated password will be used. Algorithm: echo -n \"yourpassword\" | sha1sum | tr -d '-' | xxd -r -p | sha1sum | tr -d '-'").optional()
}