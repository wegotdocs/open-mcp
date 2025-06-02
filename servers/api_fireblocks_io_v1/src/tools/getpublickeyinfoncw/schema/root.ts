import { z } from "zod"

export const inputParamsSchema = {
  "walletId": z.string().describe("The ID of the Non-Custodial wallet"),
  "derivationPath": z.string().describe("An array of integers (passed as JSON stringified array) representing the full BIP44 derivation path of the requested public key. \nThe first element must always be 44.\n"),
  "algorithm": z.enum(["MPC_ECDSA_SECP256K1","MPC_ECDSA_SECP256R1","MPC_EDDSA_ED25519"]).describe("Elliptic Curve"),
  "compressed": z.boolean().optional()
}