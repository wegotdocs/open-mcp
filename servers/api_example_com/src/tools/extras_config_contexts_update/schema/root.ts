import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this config context."),
  "name": z.string().min(1).max(100),
  "weight": z.number().int().gte(0).lte(32767).optional(),
  "description": z.string().max(200).optional(),
  "is_active": z.boolean().optional(),
  "regions": z.array(z.number().int()).optional(),
  "site_groups": z.array(z.number().int()).optional(),
  "sites": z.array(z.number().int()).optional(),
  "locations": z.array(z.number().int()).optional(),
  "device_types": z.array(z.number().int()).optional(),
  "roles": z.array(z.number().int()).optional(),
  "platforms": z.array(z.number().int()).optional(),
  "cluster_types": z.array(z.number().int()).optional(),
  "cluster_groups": z.array(z.number().int()).optional(),
  "clusters": z.array(z.number().int()).optional(),
  "tenant_groups": z.array(z.number().int()).optional(),
  "tenants": z.array(z.number().int()).optional(),
  "tags": z.array(z.string().min(1)).optional(),
  "data_source": z.number().int().optional(),
  "data": z.any()
}