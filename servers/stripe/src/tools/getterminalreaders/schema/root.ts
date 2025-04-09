import { z } from "zod"

export const inputParams = {
  "device_type": z.enum(["bbpos_chipper2x","bbpos_wisepad3","bbpos_wisepos_e","mobile_phone_reader","simulated_wisepos_e","stripe_m2","stripe_s700","verifone_P400"]).describe("Filters readers by device type").optional(),
  "ending_before": z.string().max(5000).describe("A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
  "location": z.string().max(5000).describe("A location ID to filter the response list to only readers at the specific location").optional(),
  "serial_number": z.string().max(5000).describe("Filters readers by serial number").optional(),
  "starting_after": z.string().max(5000).describe("A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.").optional(),
  "status": z.enum(["offline","online"]).describe("A status filter to filter readers to only offline or online readers").optional()
}