import { z } from "zod"

export const inputParamsSchema = {
  "derivationPath": z.array(z.number().int()).min(5).max(5).describe("An array of integers representing the full BIP44 derivation path of the requested public key. \nThe first element must always be 44.\n"),
  "algorithm": z.enum(["MPC_ECDSA_SECP256K1","MPC_ECDSA_SECP256R1","MPC_EDDSA_ED25519"]),
  "compressed": z.boolean().optional()
}