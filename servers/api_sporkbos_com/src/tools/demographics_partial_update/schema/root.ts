import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this demographic."),
  "b_id": z.number().int().readonly().optional(),
  "created_by": z.string().optional(),
  "updated_by": z.string().optional(),
  "deleted_by": z.string().optional(),
  "ulid": z.string().readonly().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional(),
  "updated_at": z.string().datetime({ offset: true }).readonly().optional(),
  "deleted_at": z.string().datetime({ offset: true }).readonly().optional(),
  "family_status": z.enum(["Single","Married","SingleWithChildren","MarriedWithChildren","Other","None"]).describe("* `Single` - Single\n* `Married` - Married\n* `SingleWithChildren` - Single with Children\n* `MarriedWithChildren` - Married with Children\n* `Other` - Other\n* `None` - None").optional(),
  "gender": z.enum(["Male","Female","Other","None"]).describe("* `Male` - Male\n* `Female` - Female\n* `Other` - Other\n* `None` - None").optional(),
  "race": z.enum(["White","Black","Hispanic","Asian","Other","None"]).describe("* `White` - White\n* `Black` - Black\n* `Hispanic` - Hispanic\n* `Asian` - Asian\n* `Other` - Other\n* `None` - None").optional(),
  "religion": z.enum(["Christianity","Islam","Hinduism","Buddhism","Judaism","Taoism","Shinto","Sikhism","Jainism","Agnosticism","Atheism","Other","None"]).describe("* `Christianity` - Christianity\n* `Islam` - Islam\n* `Hinduism` - Hinduism\n* `Buddhism` - Buddhism\n* `Judaism` - Judaism\n* `Taoism` - Taoism\n* `Shinto` - Shinto\n* `Sikhism` - Sikhism\n* `Jainism` - Jainism\n* `Agnosticism` - Agnosticism\n* `Atheism` - Atheism\n* `Other` - Other\n* `None` - None").optional(),
  "sexual_orientation": z.enum(["Heterosexual","LGBTQ","Other","None"]).describe("* `Heterosexual` - Heterosexual\n* `LGBTQ` - LGBTQ+\n* `Other` - Other\n* `None` - None").optional(),
  "veteran": z.enum(["Non","Active","Reservist","Veteran","Protected","Other","None"]).describe("* `Non` - Non Veteran\n* `Active` - Active Military\n* `Reservist` - Reservist\n* `Veteran` - Veteran\n* `Protected` - Protected Veteran\n* `Other` - Other\n* `None` - None").optional(),
  "birth_date": z.string().date().nullable().optional(),
  "user": z.number().int().readonly().optional()
}