import { z } from "zod"

export const inputParamsSchema = {
  "ackrequested": z.boolean().optional(),
  "authorizationInformation": z.string().optional(),
  "authorizationInformationQualifier": z.enum(["X12AUTHQUAL_00","X12AUTHQUAL_01","X12AUTHQUAL_02","X12AUTHQUAL_03","X12AUTHQUAL_04","X12AUTHQUAL_05"]).optional(),
  "componentElementSeparator": z.string().optional(),
  "interchangeId": z.string().optional(),
  "interchangeIdQualifier": z.enum(["X12IDQUAL_01","X12IDQUAL_02","X12IDQUAL_03","X12IDQUAL_04","X12IDQUAL_07","X12IDQUAL_08","X12IDQUAL_09","X12IDQUAL_10","X12IDQUAL_11","X12IDQUAL_12","X12IDQUAL_13","X12IDQUAL_14","X12IDQUAL_15","X12IDQUAL_16","X12IDQUAL_17","X12IDQUAL_18","X12IDQUAL_19","X12IDQUAL_20","X12IDQUAL_21","X12IDQUAL_22","X12IDQUAL_23","X12IDQUAL_24","X12IDQUAL_25","X12IDQUAL_26","X12IDQUAL_27","X12IDQUAL_28","X12IDQUAL_29","X12IDQUAL_30","X12IDQUAL_31","X12IDQUAL_32","X12IDQUAL_33","X12IDQUAL_34","X12IDQUAL_NR","X12IDQUAL_ZZ"]).optional(),
  "securityInformation": z.string().optional(),
  "securityInformationQualifier": z.enum(["X12SECQUAL_00","X12SECQUAL_01"]).optional(),
  "standardIdentification": z.string().optional(),
  "testindicator": z.enum(["P","T"]).optional(),
  "version": z.string().optional()
}