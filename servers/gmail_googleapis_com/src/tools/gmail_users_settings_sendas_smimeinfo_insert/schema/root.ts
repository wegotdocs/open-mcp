import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "sendAsEmail": z.string().describe("The email address that appears in the \"From:\" header for mail sent using this alias."),
  "encryptedKeyPassword": z.string().describe("Encrypted key password, when key is encrypted.").optional(),
  "expiration": z.string().describe("When the certificate expires (in milliseconds since epoch).").optional(),
  "id": z.string().describe("The immutable ID for the SmimeInfo.").optional(),
  "isDefault": z.boolean().describe("Whether this SmimeInfo is the default one for this user's send-as address.").optional(),
  "issuerCn": z.string().describe("The S/MIME certificate issuer's common name.").optional(),
  "pem": z.string().describe("PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).").optional(),
  "pkcs12": z.string().describe("PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.").optional()
}