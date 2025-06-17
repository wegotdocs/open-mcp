import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "customerId": z.string().describe("The dispute's customer ID").readonly().optional(),
  "transactionId": z.string().describe("The dispute's transaction ID"),
  "currency": z.string().describe("The dispute currency ISO Alpha code"),
  "amount": z.number().describe("The dispute amount").optional(),
  "acquirerReferenceNumber": z.string().describe("The dispute's acquirer reference number").optional(),
  "reasonCode": z.enum(["1000","12","2","30","31","35","37","40","41","42","46","47","49","50","53","54","55","57","59","60","62","7","70","71","72","73","74","75","76","77","79","8","80","81","82","83","85","86","93","00","63","A01","A02","A08","F10","F14","F22","F24","F29","C02","C04","C05","C08","C14","C18","C28","C31","C32","M10","M49","P01","P03","P04","P05","P07","P08","P22","P23","R03","R13","M01","FR1","FR4","FR6","AL","AP","AW","CA","CD","CR","DA","DP","DP1","EX","IC","IN","IS","LP","N","NA","NC","P","RG","RM","RN1","RN2","SV","TF","TNM","UA01","UA02","UA32","UA99","UA03","UA10","UA11","UA12","UA18","UA20","UA21","UA22","UA23","UA28","UA30","UA31","UA38","duplicate","fraudulent","subscription_canceled","product_unacceptable","product_not_received","unrecognized","credit_not_processed","customer_initiated","incorrect_account_details","insufficient_funds","bank_cannot_process","debit_not_authorized","general"]).describe("The dispute's reason code"),
  "category": z.enum(["fraud","unrecognized","product-not-received","product-unacceptable","product-not-refunded","duplicate","subscription-canceled","uncategorized"]).describe("The dispute's category").readonly().optional(),
  "type": z.enum(["information-request","first-chargeback","second-chargeback","arbitration"]).describe("The dispute's type"),
  "status": z.enum(["response-needed","under-review","forfeited","won","lost","unknown"]).describe("The dispute's status"),
  "postedTime": z.string().datetime({ offset: true }).describe("Dispute posted time"),
  "deadlineTime": z.string().datetime({ offset: true }).describe("Dispute deadline time").optional(),
  "rawResponse": z.string().describe("Dispute raw response from gateway").readonly().optional(),
  "resolvedTime": z.string().optional(),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}