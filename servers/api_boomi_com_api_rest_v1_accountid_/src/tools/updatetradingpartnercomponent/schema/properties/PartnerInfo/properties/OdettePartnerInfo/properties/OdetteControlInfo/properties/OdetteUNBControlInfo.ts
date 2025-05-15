import { z } from "zod"

export const inputParamsSchema = {
  "ackRequest": z.boolean().optional(),
  "appReference": z.string().optional(),
  "commAgreement": z.string().optional(),
  "interchangeAddress": z.string().optional(),
  "interchangeId": z.string().optional(),
  "interchangeIdQual": z.enum(["ODETTEIDQUAL_NA","ODETTEIDQUAL_1","ODETTEIDQUAL_4","ODETTEIDQUAL_5","ODETTEIDQUAL_8","ODETTEIDQUAL_9","ODETTEIDQUAL_12","ODETTEIDQUAL_14","ODETTEIDQUAL_18","ODETTEIDQUAL_22","ODETTEIDQUAL_30","ODETTEIDQUAL_31","ODETTEIDQUAL_33","ODETTEIDQUAL_34","ODETTEIDQUAL_51","ODETTEIDQUAL_52","ODETTEIDQUAL_53","ODETTEIDQUAL_54","ODETTEIDQUAL_55","ODETTEIDQUAL_57","ODETTEIDQUAL_58","ODETTEIDQUAL_59","ODETTEIDQUAL_61","ODETTEIDQUAL_63","ODETTEIDQUAL_65","ODETTEIDQUAL_80","ODETTEIDQUAL_82","ODETTEIDQUAL_84","ODETTEIDQUAL_85","ODETTEIDQUAL_86","ODETTEIDQUAL_87","ODETTEIDQUAL_89","ODETTEIDQUAL_90","ODETTEIDQUAL_91","ODETTEIDQUAL_92","ODETTEIDQUAL_103","ODETTEIDQUAL_128","ODETTEIDQUAL_129","ODETTEIDQUAL_144","ODETTEIDQUAL_145","ODETTEIDQUAL_146","ODETTEIDQUAL_147","ODETTEIDQUAL_148","ODETTEIDQUAL_Z01","ODETTEIDQUAL_ZZZ","ODETTEIDQUAL_ZZ"]).optional(),
  "interchangeSubAddress": z.string().optional(),
  "priority": z.enum(["NA","A"]).optional(),
  "referencePassword": z.string().optional(),
  "referencePasswordQualifier": z.enum(["NA","AA","BB"]).optional(),
  "syntaxId": z.enum(["UNOA","UNOB","UNOC","UNOD","UNOE","UNOF"]).optional(),
  "syntaxVersion": z.enum(["ODETTESYNTAXVERSION_1","ODETTESYNTAXVERSION_2","ODETTESYNTAXVERSION_3"]).optional(),
  "testIndicator": z.enum(["ODETTETEST_NA","ODETTETEST_1"]).optional()
}