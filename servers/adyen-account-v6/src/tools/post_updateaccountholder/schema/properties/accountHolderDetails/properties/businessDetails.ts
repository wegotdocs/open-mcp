import { z } from "zod"

export const inputParamsSchema = {
  "doingBusinessAs": z.string().describe("The registered name of the company (if it differs from the legal name of the company).").optional(),
  "legalBusinessName": z.string().describe("The legal name of the company.").optional(),
  "listedUltimateParentCompany": z.array(z.object({ "address": z.object({ "city": z.string().describe("The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.").optional(), "country": z.string().describe("The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**."), "houseNumberOrName": z.string().describe("The number or name of the house.").optional(), "postalCode": z.string().describe("The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.").optional(), "stateOrProvince": z.string().describe("The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided. \n\nMaximum length:\n\n* 2 characters for addresses in the US or Canada.\n\n* 3 characters for all other countries.\n").optional(), "street": z.string().describe("The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.").optional() }).strict().describe("Address of the ultimate parent company.").optional(), "businessDetails": z.object({ "legalBusinessName": z.string().describe("The legal name of the company.").optional(), "registrationNumber": z.string().describe("The registration number of the company.").optional(), "stockExchange": z.string().describe("Market Identifier Code (MIC).").optional(), "stockNumber": z.string().describe("International Securities Identification Number (ISIN).").optional(), "stockTicker": z.string().describe("Stock Ticker symbol.").optional() }).strict().describe("Details about the ultimate parent company's business.").optional(), "ultimateParentCompanyCode": z.string().describe("Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create an ultimate parent company. Required when updating an existing entry in an `/updateAccountHolder` request.").optional() }).strict()).describe("Information about the parent public company. Required if the account holder is 100% owned by a publicly listed company.").optional(),
  "registrationNumber": z.string().describe("The registration number of the company.").optional(),
  "shareholders": z.array(z.object({ "address": z.object({ "city": z.string().describe("The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.").optional(), "country": z.string().describe("The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**."), "houseNumberOrName": z.string().describe("The number or name of the house.").optional(), "postalCode": z.string().describe("The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.").optional(), "stateOrProvince": z.string().describe("The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided. \n\nMaximum length:\n\n* 2 characters for addresses in the US or Canada.\n\n* 3 characters for all other countries.\n").optional(), "street": z.string().describe("The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.").optional() }).strict().describe("The address of the person.").optional(), "email": z.string().describe("The e-mail address of the person.").optional(), "fullPhoneNumber": z.string().describe("The phone number of the person provided as a single string.  It will be handled as a landline phone.\nExamples: \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"").optional(), "jobTitle": z.string().describe("Job title of the person. Required when the `shareholderType` is **Controller**.\n\nExample values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.").optional(), "name": z.object({ "firstName": z.string().max(80).describe("The first name.").optional(), "gender": z.enum(["MALE","FEMALE","UNKNOWN"]).describe("The gender.\n>The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.").optional(), "infix": z.string().max(20).describe("The name's infix, if applicable.\n>A maximum length of twenty (20) characters is imposed.").optional(), "lastName": z.string().max(80).describe("The last name.").optional() }).strict().describe("The name of the person.").optional(), "personalData": z.object({ "dateOfBirth": z.string().describe("The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.").optional(), "documentData": z.array(z.object({ "expirationDate": z.string().describe("The expiry date of the document, \n in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.").optional(), "issuerCountry": z.string().min(2).max(2).describe("The country where the document was issued, in the two-character \n[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.").optional(), "issuerState": z.string().describe("The state where the document was issued (if applicable).").optional(), "number": z.string().describe("The number in the document.").optional(), "type": z.enum(["DRIVINGLICENSE","ID","PASSPORT","SOCIALSECURITY","VISA"]).describe("The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.\n\nTo delete an existing entry for a document `type`, send only the `type` field in your request. ") }).strict()).describe("Array that contains information about the person's identification document. You can submit only one entry per document type.").optional(), "nationality": z.string().min(2).max(2).describe("The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.\n").optional() }).strict().describe("Contains information about the person.").optional(), "phoneNumber": z.object({ "phoneCountryCode": z.string().describe("The two-character country code of the phone number.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').").optional(), "phoneNumber": z.string().describe("The phone number.\n>The inclusion of the phone number country code is not necessary.").optional(), "phoneType": z.enum(["Fax","Landline","Mobile","SIP"]).describe("The type of the phone number.\n>The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.").optional() }).strict().describe("The phone number of the person.").optional(), "shareholderCode": z.string().describe("The unique identifier (UUID) of the shareholder entry.\n>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**\n\n>**If, during an Account Holder create request, a UUID is provided, the creation of Account Holder will fail with a validation Error..**\n\n>**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**\n\n>**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.**\n").optional(), "shareholderReference": z.string().describe("Your reference for the shareholder entry.").optional(), "shareholderType": z.enum(["Controller","Owner","Signatory"]).describe("Specifies how the person is associated with the account holder. \n\nPossible values: \n\n* **Owner**: Individuals who directly or indirectly own 25% or more of a company.\n\n* **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.").optional(), "webAddress": z.string().describe("The URL of the person's website.").optional() }).strict()).describe("Array containing information about individuals associated with the account holder either through ownership or control. For details about how you can identify them, refer to [our verification guide](https://docs.adyen.com/classic-platforms/verification-process#identify-ubos).").optional(),
  "signatories": z.array(z.object({ "address": z.object({ "city": z.string().describe("The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.").optional(), "country": z.string().describe("The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**."), "houseNumberOrName": z.string().describe("The number or name of the house.").optional(), "postalCode": z.string().describe("The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.").optional(), "stateOrProvince": z.string().describe("The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided. \n\nMaximum length:\n\n* 2 characters for addresses in the US or Canada.\n\n* 3 characters for all other countries.\n").optional(), "street": z.string().describe("The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.").optional() }).strict().describe("The address of the person.").optional(), "email": z.string().describe("The e-mail address of the person.").optional(), "fullPhoneNumber": z.string().describe("The phone number of the person provided as a single string.  It will be handled as a landline phone.\nExamples: \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"").optional(), "jobTitle": z.string().describe("Job title of the signatory.\n\nExample values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.").optional(), "name": z.object({ "firstName": z.string().max(80).describe("The first name.").optional(), "gender": z.enum(["MALE","FEMALE","UNKNOWN"]).describe("The gender.\n>The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.").optional(), "infix": z.string().max(20).describe("The name's infix, if applicable.\n>A maximum length of twenty (20) characters is imposed.").optional(), "lastName": z.string().max(80).describe("The last name.").optional() }).strict().describe("The name of the person.").optional(), "personalData": z.object({ "dateOfBirth": z.string().describe("The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.").optional(), "documentData": z.array(z.object({ "expirationDate": z.string().describe("The expiry date of the document, \n in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.").optional(), "issuerCountry": z.string().min(2).max(2).describe("The country where the document was issued, in the two-character \n[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.").optional(), "issuerState": z.string().describe("The state where the document was issued (if applicable).").optional(), "number": z.string().describe("The number in the document.").optional(), "type": z.enum(["DRIVINGLICENSE","ID","PASSPORT","SOCIALSECURITY","VISA"]).describe("The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.\n\nTo delete an existing entry for a document `type`, send only the `type` field in your request. ") }).strict()).describe("Array that contains information about the person's identification document. You can submit only one entry per document type.").optional(), "nationality": z.string().min(2).max(2).describe("The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.\n").optional() }).strict().describe("Contains information about the person.").optional(), "phoneNumber": z.object({ "phoneCountryCode": z.string().describe("The two-character country code of the phone number.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').").optional(), "phoneNumber": z.string().describe("The phone number.\n>The inclusion of the phone number country code is not necessary.").optional(), "phoneType": z.enum(["Fax","Landline","Mobile","SIP"]).describe("The type of the phone number.\n>The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.").optional() }).strict().describe("The phone number of the person.").optional(), "signatoryCode": z.string().describe("The unique identifier (UUID) of the signatory.\n>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Signatory will be created with a procedurally-generated UUID.**\n\n>**If, during an Account Holder create request, a UUID is provided, the creation of the Signatory will fail while the creation of the Account Holder will continue.**\n\n>**If, during an Account Holder update request, a UUID that is not correlated with an existing Signatory is provided, the update of the Signatory will fail.**\n\n>**If, during an Account Holder update request, a UUID that is correlated with an existing Signatory is provided, the existing Signatory will be updated.**\n").optional(), "signatoryReference": z.string().describe("Your reference for the signatory.").optional(), "webAddress": z.string().describe("The URL of the person's website.").optional() }).strict()).describe("Signatories associated with the company.\nEach array entry should represent one signatory.").optional(),
  "stockExchange": z.string().describe("Market Identifier Code (MIC).").optional(),
  "stockNumber": z.string().describe("International Securities Identification Number (ISIN).").optional(),
  "stockTicker": z.string().describe("Stock Ticker symbol.").optional(),
  "taxId": z.string().describe("The tax ID of the company.").optional()
}