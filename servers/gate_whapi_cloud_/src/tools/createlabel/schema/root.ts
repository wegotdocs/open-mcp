import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().regex(new RegExp("^([\\d]{1,2})?$")).describe("Label ID"),
  "name": z.string().describe("Label name"),
  "color": z.enum(["salmon","lightskyblue","gold","plum","silver","mediumturquoise","violet","goldenrod","cornflowerblue","greenyellow","cyan","lightpink","mediumaquamarine","orangered","deepskyblue","limegreen","darkorange","lightsteelblue","mediumpurple","rebeccapurple"]).describe("Label color")
}