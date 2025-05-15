import { z } from "zod"

export const inputParamsSchema = {
  "expression": z.object({ "argument": z.array(z.string()).optional(), "operator": z.enum(["EQUALS","STARTS_WITH","BETWEEN","GREATER_THAN","GREATER_THAN_OR_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL"]), "property": z.enum(["executionId","atomId","dateProcessed","id","actionType","connectorType","connectorName","operationName","documentIndex","successful","size","errorMessage","validationStatus","validationReport","senderName","receiverName","messageType","date","time","senderTransmissionReference","receiverTransmissionReference","applicationReference","transmissionPriorityCode","fileGenerationNumber","fileVersionNumber"]) })
}