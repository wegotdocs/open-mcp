import { z } from "zod"

export const inputParamsSchema = {
  "path": z.array(z.string()).describe("An array of comma separated {latitude,longitude} strings."),
  "interpolate": z.boolean().describe("Whether to interpolate a path to include all points forming the full road-geometry. When true, additional interpolated points will also be returned, resulting in a path that smoothly follows the geometry of the road, even around corners and through tunnels. Interpolated paths will most likely contain more points than the original path. Defaults to `false`.\n").optional()
}