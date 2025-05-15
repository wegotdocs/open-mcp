import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "accountId": z.string().describe("The account ID.").optional(),
  "assertionEncryption": z.boolean().optional(),
  "authnContext": z.string().describe("PPT - \\(Default\\) Password Protected Transport, requires a username and password for authentication<br />UNSPECIFIED - Accepts any type of authentication").optional(),
  "authnContextComparison": z.string().describe("EXACT - The resulting authentication context in the authentication statement must be the exact match to at least one of the specified authentication contexts.<br />MINUMUM - The resulting authentication context in the authentication statement must be at least as strong \\(as deemed by the responder\\) as one of the specified authentication contexts.").optional(),
  "certInfo": z.string().describe("Metadata for the public certificate of the identity provider.").optional(),
  "certificate": z.array(z.string()).describe("Base64-encoded certificate bytes for the identity provider.").optional(),
  "enabled": z.boolean().describe("*true* — Enables single sign-on for the account. <br />   *false* — Disables single sign-on for the account.").optional(),
  "fedIdFromNameId": z.boolean().describe("*true* — The federation ID is in the NameID element of the Subject element in the SAML Response document.<br /> *false*— The federation ID is in the FEDERATION\\_ID Attribute element in the SAML Response document.").optional(),
  "idpUrl": z.string().describe("The URL of the identity provider's single sign-on service.").optional(),
  "nameIdPolicy": z.string().describe("*TRANSIENT* — Indicates that the content of the element is a non-constant and temporary value that should not assume any standard meaning; the identifier confirms a user is granted access without revealing the user's actual name or identity<br />*UNSPECIFIED* — Indicates that identity provider can interpret the NameID attribute; the identifier confirms a user is granted access and can reveal the user's real name or identity depending on how it is defined by identity provider.<br />**Important:** Entering any value other than TRANSIENT or UNSPECIFIED for the nameIdPolicy results in an exception.<br />As a service provider, does not interpret the NameID value; a user is identified by comparing the *NameID* value with the *Federation ID* value.").optional(),
  "signoutRedirectUrl": z.string().describe("After signing out of the, the URL that redirects the user.").optional()
}