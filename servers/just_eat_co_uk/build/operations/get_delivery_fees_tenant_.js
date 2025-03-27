import { z } from "zod";
export const toolName = `get_delivery_fees_tenant_`;
export const toolDescription = `Get restaurant delivery fees`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/delivery-fees/{tenant}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Tenant containing the restaurants.") }).optional(), "query": z.object({ "restaurantIds": z.array(z.string()).max(200).describe("Restaurant IDs which fees are requested for. e.g. `?restaurantIds=1,2,3,4`"), "deliveryTime": z.string().datetime({ offset: true }).describe("Delivery date/time when fees are required (ISO8601 format)."), "zone": z.string().describe("Postcode or other location name identifying the location to which delivery is required. For use when precise location is not available. This will be removed in future in favour of location.").optional(), "latlong": z.array(z.number()).min(2).max(2).describe("Point to which delivery is required (latitude, longitude). Supply this where possible as support for zone-only based lookups will be removed in future.").optional() }).optional() }).shape;
