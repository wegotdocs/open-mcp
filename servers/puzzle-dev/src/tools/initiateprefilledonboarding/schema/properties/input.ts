import { z } from "zod"

export const inputParams = {
  "name": z.string(),
  "type": z.enum(["SAAS","ECOMMERCE","MARKETPLACE","ADVERTISING","SERVICES","ENTERPRISE","FINTECH","FINTECH_CRYPTO","VIRTUAL_GOODS","CONSUMER","NOT_SURE","OTHER","AGRICULTURE_AND_FARMING","CONSTRUCTION","HEALTHCARE","HOME_SERVICES","LEGAL","MANUFACTURING","MEDIA_AND_ENTERTAINMENT","PROFESSIONAL_SERVICES","RETAIL","REAL_ESTATE","RESTAURANT","TRANSPORTATION","WHOLESALE_TRADE"]),
  "revenueModel": z.enum(["AnnualSubscription","MonthlySubscription","MultipleRevenueModels","NotSure","PreRevenue","ServiceBased","TransactionBased","UsageBased","Subscription","AddOns","TransactionBasedPhysical","TransactionBasedOther","Contracts","HourlyBilling","Marketplace","Commission"]).optional(),
  "timeZone": z.string(),
  "currentUserRole": z.enum(["Founder","CompanyEmployee","OutsourcedAccountantOrCFO"]),
  "orgType": z.enum(["CCorporation","LLC","Partnership","SCorporation","SoleProprietorship","ProfessionalServicesCorp","Nonprofit"]),
  "hasHistoricalData": z.boolean().optional(),
  "connectionInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `connectionInfo` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/connectionInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}