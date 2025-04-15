import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly().optional(),
  "fingerprint": z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly().optional(),
  "public_key": z.string().describe("The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation."),
  "name": z.string().describe("A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.")
}