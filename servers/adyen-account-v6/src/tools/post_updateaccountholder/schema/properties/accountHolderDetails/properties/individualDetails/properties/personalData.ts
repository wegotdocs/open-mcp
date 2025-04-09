import { z } from "zod"

export const inputParams = {
  "dateOfBirth": z.string().describe("The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.").optional(),
  "documentData": z.array(z.object({ "expirationDate": z.string().describe("The expiry date of the document, \n in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.").optional(), "issuerCountry": z.string().min(2).max(2).describe("The country where the document was issued, in the two-character \n[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.").optional(), "issuerState": z.string().describe("The state where the document was issued (if applicable).").optional(), "number": z.string().describe("The number in the document.").optional(), "type": z.enum(["DRIVINGLICENSE","ID","PASSPORT","SOCIALSECURITY","VISA"]).describe("The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.\n\nTo delete an existing entry for a document `type`, send only the `type` field in your request. ") }).strict()).describe("Array that contains information about the person's identification document. You can submit only one entry per document type.").optional(),
  "nationality": z.string().min(2).max(2).describe("The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.\n").optional()
}