import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().min(1).max(512),
  "description": z.string().max(1048576).describe("Description of the case, supports markdown"),
  "severity": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "startDate": z.number().int().optional(),
  "endDate": z.number().int().optional(),
  "tags": z.array(z.string().min(1).max(128)).optional(),
  "flag": z.boolean().optional(),
  "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]).optional(),
  "status": z.string().min(1).max(64).optional(),
  "summary": z.string().max(1048576).optional(),
  "assignee": z.string().min(1).max(128).describe("User to assign the case to").optional(),
  "access": z.object({ "_kind": z.literal("OrganisationAccessKind") }).describe("Access type. The default value is the organisation based access").optional(),
  "customFields": z.record(z.any()).optional(),
  "caseTemplate": z.string().min(1).max(128).describe("Name or id of the Case Template to use").optional(),
  "tasks": z.array(z.object({ "title": z.string().min(1).max(128), "group": z.string().min(1).max(64).optional(), "description": z.string().max(1048576).optional(), "status": z.string().min(1).max(16).optional(), "flag": z.boolean().optional(), "startDate": z.number().int().optional(), "endDate": z.number().int().optional(), "order": z.number().int().optional(), "dueDate": z.number().int().optional(), "assignee": z.string().min(1).max(128).optional(), "mandatory": z.boolean().optional() })).describe("Tasks to create. If null, tasks from the Case Template will be used").optional(),
  "pages": z.array(z.object({ "title": z.string().min(1).max(512), "content": z.string().max(1048576), "order": z.number().int().optional(), "category": z.string().min(1).max(128) })).optional(),
  "sharingParameters": z.array(z.object({ "organisation": z.string().describe("Name or id of the organisation"), "share": z.boolean().describe("If true, new observables and tasks will also be shared to the organisation"), "profile": z.string().min(1).max(64).describe("Profile used to define the permissions of the organisation members"), "taskRule": z.string().min(1).max(64).describe("Sharing rule to apply to the tasks, can be manual or autoShare"), "observableRule": z.string().min(1).max(64).describe("Sharing rule to apply to the observables, can be manual or autoShare") })).optional(),
  "taskRule": z.string().min(1).max(128).optional(),
  "observableRule": z.string().min(1).max(128).optional()
}