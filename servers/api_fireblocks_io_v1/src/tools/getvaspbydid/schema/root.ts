import { z } from "zod"

export const inputParamsSchema = {
  "did": z.string(),
  "fields": z.array(z.enum(["did","name","verificationStatus","addressLine1","addressLine2","city","country","emailDomains","website","logo","legalStructure","legalName","yearFounded","incorporationCountry","isRegulated","otherNames","identificationType","identificationCountry","businessNumber","regulatoryAuthorities","jurisdictions","street","number","unit","postCode","state","certificates","description","travelRule_OPENVASP","travelRule_SYGNA","travelRule_TRISA","travelRule_TRLIGHT","travelRule_EMAIL","travelRule_TRP","travelRule_SHYFT","travelRule_USTRAVELRULEWG","createdAt","createdBy","updatedAt","updatedBy","lastSentDate","lastReceivedDate","documents","hasAdmin","isNotifiable","issuers"])).describe("A CSV of fields to return. Choose from the following options:").optional()
}