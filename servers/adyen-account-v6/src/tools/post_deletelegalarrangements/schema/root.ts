import { z } from "zod"

export const inputParams = {
  "accountHolderCode": z.string().describe("The code of the account holder."),
  "legalArrangements": z.array(z.object({ "legalArrangementCode": z.string().describe("The code of the legal arrangement to be deleted. If you also send `legalArrangementEntityCodes`, only the entities listed will be deleted."), "legalArrangementEntityCodes": z.array(z.string()).describe("List of legal arrangement entities to be deleted.").optional() }).strict()).describe("List of legal arrangements.")
}