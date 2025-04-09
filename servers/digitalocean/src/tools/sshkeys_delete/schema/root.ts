import { z } from "zod"

export const inputParams = {
  "ssh_key_identifier": z.union([z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly(), z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly()]).describe("Either the ID or the fingerprint of an existing SSH key.")
}