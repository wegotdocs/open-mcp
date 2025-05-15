import { z } from "zod"

export const inputParamsSchema = {
  "ackRequest": z.boolean().optional(),
  "appReference": z.string().optional(),
  "commAgreement": z.string().optional(),
  "interchangeAddress": z.string().optional(),
  "interchangeId": z.string().optional(),
  "interchangeIdQual": z.enum(["EDIFACTIDQUAL_NA","EDIFACTIDQUAL_1","EDIFACTIDQUAL_4","EDIFACTIDQUAL_5","EDIFACTIDQUAL_8","EDIFACTIDQUAL_9","EDIFACTIDQUAL_12","EDIFACTIDQUAL_14","EDIFACTIDQUAL_18","EDIFACTIDQUAL_22","EDIFACTIDQUAL_30","EDIFACTIDQUAL_31","EDIFACTIDQUAL_33","EDIFACTIDQUAL_34","EDIFACTIDQUAL_51","EDIFACTIDQUAL_52","EDIFACTIDQUAL_53","EDIFACTIDQUAL_54","EDIFACTIDQUAL_55","EDIFACTIDQUAL_57","EDIFACTIDQUAL_58","EDIFACTIDQUAL_59","EDIFACTIDQUAL_61","EDIFACTIDQUAL_63","EDIFACTIDQUAL_65","EDIFACTIDQUAL_80","EDIFACTIDQUAL_82","EDIFACTIDQUAL_84","EDIFACTIDQUAL_85","EDIFACTIDQUAL_86","EDIFACTIDQUAL_87","EDIFACTIDQUAL_89","EDIFACTIDQUAL_90","EDIFACTIDQUAL_91","EDIFACTIDQUAL_92","EDIFACTIDQUAL_103","EDIFACTIDQUAL_128","EDIFACTIDQUAL_129","EDIFACTIDQUAL_144","EDIFACTIDQUAL_145","EDIFACTIDQUAL_146","EDIFACTIDQUAL_147","EDIFACTIDQUAL_148","EDIFACTIDQUAL_Z01","EDIFACTIDQUAL_ZZZ","EDIFACTIDQUAL_ZZ"]).optional(),
  "interchangeSubAddress": z.string().optional(),
  "priority": z.enum(["NA","A"]).optional(),
  "referencePassword": z.string().optional(),
  "referencePasswordQualifier": z.enum(["NA","AA","BB"]).optional(),
  "syntaxId": z.enum(["UNOA","UNOB","UNOC","UNOD","UNOE","UNOF"]).optional(),
  "syntaxVersion": z.enum(["EDIFACTSYNTAXVERSION_1","EDIFACTSYNTAXVERSION_2","EDIFACTSYNTAXVERSION_3"]).optional(),
  "testIndicator": z.enum(["EDIFACTTEST_NA","EDIFACTTEST_1"]).optional()
}