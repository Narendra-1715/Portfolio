import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chappidi Venkata Narendra Babu — Portfolio",
    short_name: "Narendra Babu",
    description:
      "Chappidi Venkata Narendra Babu is an Engineering student specializing in Artificial Intelligence and Machine Learning at KKR & KSR Institute of Technology and Sciences.",
    start_url: "/",
    display: "standalone",
    background_color: "#05010f",
    theme_color: "#05010f",
    icons: [
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
