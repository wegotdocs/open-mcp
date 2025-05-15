import { z } from "zod"

export const inputParamsSchema = {
  "PartnerDocumentType": z.array(z.object({ "expectAckForOutbound": z.boolean().optional(), "invalidDocumentRouting": z.enum(["documentsPath","errorsPath"]).optional(), "name": z.string().optional(), "profileId": z.string().optional(), "qualifierValidation": z.boolean().optional(), "typeId": z.string().optional(), "use999Ack": z.boolean().optional(), "useTA1Ack": z.boolean().optional(), "validateOutboundTransactionSets": z.boolean().optional() })).optional()
}