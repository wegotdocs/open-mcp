import { z } from "zod"

export const inputParamsSchema = {
  "order": z.enum(["ASC","DESC"]).describe("Field to order by").optional(),
  "pageSize": z.number().gte(100).lte(1000).describe("Records per page").optional(),
  "fields": z.array(z.enum(["did","name","verificationStatus","addressLine1","addressLine2","city","country","emailDomains","website","logo","legalStructure","legalName","yearFounded","incorporationCountry","isRegulated","otherNames","identificationType","identificationCountry","businessNumber","regulatoryAuthorities","jurisdictions","street","number","unit","postCode","state","certificates","description","travelRule_OPENVASP","travelRule_SYGNA","travelRule_TRISA","travelRule_TRLIGHT","travelRule_EMAIL","travelRule_TRP","travelRule_SHYFT","travelRule_USTRAVELRULEWG","createdAt","createdBy","updatedAt","updatedBy","lastSentDate","lastReceivedDate","documents","hasAdmin","isNotifiable","issuers"])).describe("CSV of fields to return (all, \"blank\" or see list of all field names below)").optional(),
  "search": z.string().describe("Search query").optional(),
  "reviewValue": z.union([z.literal("TRUSTED"), z.literal("BLOCKED"), z.literal("MANUAL"), z.literal(null)]).describe("Filter by the VASP's review status. Possible values include: \"TRUSTED\", \"BLOCKED\", \"MANUAL\", or \"NULL\". When provided, only VASPs that match the specified reviewValue will be returned (i.e., VASPs that have already been reviewed to this status).").optional(),
  "pageCursor": z.string().describe("Cursor for pagination. When provided, the response will include the next page of results.").optional()
}