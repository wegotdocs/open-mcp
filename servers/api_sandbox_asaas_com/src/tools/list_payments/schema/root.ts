import { z } from "zod"

export const inputParamsSchema = {
  "installment": z.string().describe("Filter by unique installment identifier").optional(),
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "customer": z.string().describe("Filter by unique customer identifier").optional(),
  "customerGroupName": z.string().describe("Filter by customer group name").optional(),
  "billingType": z.enum(["UNDEFINED","BOLETO","CREDIT_CARD","PIX"]).describe("Filter by billing type").optional(),
  "status": z.enum(["PENDING","RECEIVED","CONFIRMED","OVERDUE","REFUNDED","RECEIVED_IN_CASH","REFUND_REQUESTED","REFUND_IN_PROGRESS","CHARGEBACK_REQUESTED","CHARGEBACK_DISPUTE","AWAITING_CHARGEBACK_REVERSAL","DUNNING_REQUESTED","DUNNING_RECEIVED","AWAITING_RISK_ANALYSIS"]).describe("Filter by status").optional(),
  "subscription": z.string().describe("Filter by unique subscription identifier").optional(),
  "externalReference": z.string().describe("Filter by your system identifier").optional(),
  "paymentDate": z.string().describe("Filter by payment date").optional(),
  "invoiceStatus": z.enum(["SCHEDULED","AUTHORIZED","PROCESSING_CANCELLATION","CANCELED","CANCELLATION_DENIED","ERROR"]).describe("Filter to return charges that have or do not have an invoice").optional(),
  "estimatedCreditDate": z.string().describe("Filter by estimated credit date").optional(),
  "pixQrCodeId": z.string().describe("Filter receipts originating from a static QrCode using the id generated when the QrCode was created").optional(),
  "anticipated": z.boolean().describe("Filter anticipated charges or not").optional(),
  "anticipable": z.boolean().describe("Filter anticipable charges or not").optional(),
  "dateCreated[ge]": z.string().describe("Filter from initial creation date").optional(),
  "dateCreated[le]": z.string().describe("Filter to final creation date").optional(),
  "paymentDate[ge]": z.string().describe("Filter from initial payment date").optional(),
  "paymentDate[le]": z.string().describe("Filter to final payment date").optional(),
  "estimatedCreditDate[ge]": z.string().describe("Filter from estimated initial credit date").optional(),
  "estimatedCreditDate[le]": z.string().describe("Filter to estimated end credit date").optional(),
  "dueDate[ge]": z.string().describe("Filter from initial due date").optional(),
  "dueDate[le]": z.string().describe("Filter by final due date").optional(),
  "user": z.string().describe("Filter by the email address of the user who created the payment.").optional()
}