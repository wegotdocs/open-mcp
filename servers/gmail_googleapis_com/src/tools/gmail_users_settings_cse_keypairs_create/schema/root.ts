import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The requester's primary email address. To indicate the authenticated user, you can use the special value `me`."),
  "disableTime": z.string().describe("Output only. If a key pair is set to `DISABLED`, the time that the key pair's state changed from `ENABLED` to `DISABLED`. This field is present only when the key pair is in state `DISABLED`.").readonly().optional(),
  "enablementState": z.enum(["stateUnspecified","enabled","disabled"]).describe("Output only. The current state of the key pair.").readonly().optional(),
  "keyPairId": z.string().describe("Output only. The immutable ID for the client-side encryption S/MIME key pair.").readonly().optional(),
  "pem": z.string().describe("Output only. The public key and its certificate chain, in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format.").readonly().optional(),
  "pkcs7": z.string().describe("Input only. The public key and its certificate chain. The chain must be in [PKCS#7](https://en.wikipedia.org/wiki/PKCS_7) format and use PEM encoding and ASCII armor.").optional(),
  "privateKeyMetadata": z.array(z.object({ "kaclsKeyMetadata": z.object({ "kaclsData": z.string().describe("Opaque data generated and used by the key access control list service. Maximum size: 8 KiB.").optional(), "kaclsUri": z.string().describe("The URI of the key access control list service that manages the private key.").optional() }).describe("Metadata for a private key instance managed by an external key access control list service.").optional(), "privateKeyMetadataId": z.string().describe("Output only. The immutable ID for the private key metadata instance.").readonly().optional() }).describe("Metadata for a private key instance.")).describe("Metadata for instances of this key pair's private key.").optional(),
  "subjectEmailAddresses": z.array(z.string()).describe("Output only. The email address identities that are specified on the leaf certificate.").readonly().optional()
}