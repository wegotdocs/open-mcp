import { z } from "zod"

export const inputParamsSchema = {
  "expression": z.object({ "argument": z.array(z.string()).optional(), "operator": z.enum(["EQUALS","STARTS_WITH","BETWEEN","GREATER_THAN","GREATER_THAN_OR_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL"]), "property": z.enum(["executionId","atomId","dateProcessed","id","actionType","connectorType","connectorName","operationName","documentIndex","successful","size","errorMessage","isaAckStatus","isaAckReport","ackStatus","ackReport","isaControl","gsControl","stControl","functionalID","transactionSet","testIndicator","senderIDQualifier","senderID","receiverIDQualifier","receiverID","appSenderID","appReceiverID","standardID","standard","gsVersion","agencyCode","gsDate","gsTime","outboundValidationStatus","outboundValidationReport"]) })
}