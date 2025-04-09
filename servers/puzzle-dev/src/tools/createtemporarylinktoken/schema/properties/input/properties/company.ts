import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "name": z.string(),
  "timezone": z.string().optional(),
  "companyType": z.enum(["SAAS","ECOMMERCE","MARKETPLACE","ADVERTISING","SERVICES","ENTERPRISE","FINTECH","FINTECH_CRYPTO","VIRTUAL_GOODS","CONSUMER","NOT_SURE","OTHER","AGRICULTURE_AND_FARMING","CONSTRUCTION","HEALTHCARE","HOME_SERVICES","LEGAL","MANUFACTURING","MEDIA_AND_ENTERTAINMENT","PROFESSIONAL_SERVICES","RETAIL","REAL_ESTATE","RESTAURANT","TRANSPORTATION","WHOLESALE_TRADE"]).optional(),
  "revenueModel": z.enum(["AnnualSubscription","MonthlySubscription","MultipleRevenueModels","NotSure","PreRevenue","ServiceBased","TransactionBased","UsageBased","Subscription","AddOns","TransactionBasedPhysical","TransactionBasedOther","Contracts","HourlyBilling","Marketplace","Commission"]).optional()
}