import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string(),
  "start_date": z.string().date().describe("full-date notation as defined by [RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), for example, 2017-07-21. Unspecified implies a 1 month window.").optional(),
  "end_date": z.string().date().describe("full-date notation as defined by [RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), for example, 2017-07-21. Unspecified implies a 1 month window.").optional(),
  "query": z.string().optional(),
  "rollup": z.array(z.enum(["daily","weekly","monthly","yearly"])).optional(),
  "breakdown": z.array(z.enum(["by-country","by-cloudprovider","by-company","by-variable","by-platform","by-version","by-total","by-total-do-not-track","by-client","by-domain","by-referer","by-educational-organization","by-govermental-organization"])).optional(),
  "filter_id": z.string().optional()
}