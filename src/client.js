import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PRODUCTIONID,
  dataset: "production",
  apiVersion: "2023-08-12",
  useCdn: true,
  token:
    "skcQG2nQ92gBizFyfjLRnyXw6xbkxSH9DFPETb4OM3rpoKBJn3ncupCe5bvtniYLvJBAirkLUPCcM6aQME7AgmYTztywuROthHeR06XvASF5FjFzYj6aNCGhLArntuD45iGpi5d0TRjLlXpFAZGSqqBsNU3MygXpSmiI73IWTbVqQPwnBwZ6",
  ignoreBrowserTokenWarning: true,
});   


const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);