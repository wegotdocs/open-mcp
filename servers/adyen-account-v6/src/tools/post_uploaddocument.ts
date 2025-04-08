import { z } from "zod"

export const toolName = `post_uploaddocument`
export const toolDescription = `Upload a document`
export const baseUrl = `https://cal-test.adyen.com/cal/services/Account/v6`
export const path = `/uploadDocument`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "X-API-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-API-Key"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "documentContent",
    "documentDetail"
  ]
}
export const flatMap = {}

export const inputParams = {
  "documentContent": z.string().describe("The content of the document, in Base64-encoded string format.\n\nTo learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks)."),
  "documentDetail": z.object({ "accountHolderCode": z.string().describe("The code of account holder, to which the document applies.").optional(), "bankAccountUUID": z.string().describe("The Adyen-generated [`bankAccountUUID`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-bankAccountDetails-bankAccountUUID) to which the document must be linked. Refer to [Bank account check](https://docs.adyen.com/classic-platforms/verification-checks/bank-account-check#uploading-a-bank-statement) for details on when a document should be submitted.\n>Required if the `documentType` is **BANK_STATEMENT**, where a document is being submitted in order to verify a bank account.\n").optional(), "description": z.string().describe("Description of the document.").optional(), "documentType": z.enum(["BANK_STATEMENT","BSN","COMPANY_REGISTRATION_SCREENING","CONSTITUTIONAL_DOCUMENT","DRIVING_LICENCE","DRIVING_LICENCE_BACK","DRIVING_LICENCE_FRONT","ID_CARD","ID_CARD_BACK","ID_CARD_FRONT","PASSPORT","PROOF_OF_RESIDENCY","SSN","SUPPORTING_DOCUMENTS"]).describe("The type of the document. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when each document type should be submitted and for the accepted file formats.\n\nPermitted values:\n* **BANK_STATEMENT**: A file containing a bank statement or other document proving ownership of a specific bank account.\n* **COMPANY_REGISTRATION_SCREENING** (Supported from v5 and later): A file containing a company registration document.\n* **CONSTITUTIONAL_DOCUMENT**: A file containing information about the account holder's legal arrangement.\n* **PASSPORT**: A file containing the identity page(s) of a passport.\n* **ID_CARD_FRONT**: A file containing only the front of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.\n* **ID_CARD_BACK**: A file containing only the back of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.\n* **DRIVING_LICENCE_FRONT**: A file containing only the front of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_BACK** must be submitted.\n* **DRIVING_LICENCE_BACK**: A file containing only the back of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_FRONT** must be submitted.\n"), "filename": z.string().describe("Filename of the document.").optional(), "legalArrangementCode": z.string().describe("The Adyen-generated [`legalArrangementCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementCode) to which the document must be linked.").optional(), "legalArrangementEntityCode": z.string().describe("The Adyen-generated [`legalArrangementEntityCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementEntities-legalArrangementEntityCode)  to which the document must be linked.").optional(), "shareholderCode": z.string().describe("The Adyen-generated [`shareholderCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-shareholders-shareholderCode) to which the document must be linked. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when a document should be submitted.\n>Required if the account holder has a `legalEntity` of type **Business** and the `documentType` is either **PASSPORT**, **ID_CARD_FRONT**, **ID_CARD_BACK**, **DRIVING_LICENCE_FRONT**, or **DRIVING_LICENCE_BACK**. ").optional(), "signatoryCode": z.string().describe("The Adyen-generated [`signatoryCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-signatories-signatoryCode) to which the document must be linked.").optional() }).strict().describe("Details of the document being submitted.")
}