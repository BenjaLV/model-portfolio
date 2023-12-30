interface SeedPhoto {
  images: string[];
  slug: string;
}

interface SeedData {
  photos: SeedPhoto[];
}

export const data: SeedData = {
  photos: [
    {
      images: ["IMG_1091.JPG"],
      slug: "img_3_2022",
    },
    {
      images: ["IMG_2299.JPG"],
      slug: "img_13_2022_camisa_entreperfil",
    },

    {
      images: ["IMG_0803.JPG"],
      slug: "img_5_2022_pileta_negro",
    },
    {
      images: ["IMG_1622.JPG"],
      slug: "img_arms_2022",
    },

    {
      images: ["IMG_2292.JPG"],
      slug: "img_6_2022_pileta_color",
    },
    {
      images: ["IMG_2285.JPG"],
      slug: "img_6_2022",
    },

    {
      images: ["IMG_0965.JPG"],
      slug: "img_2_2022",
    },
    {
      images: ["IMG_2301.JPG"],
      slug: "img_14_2022",
    },
    {
      images: ["IMG_1448.JPG"],
      slug: "img_5_2022",
    },
    {
      images: ["IMG_2286.JPG"],
      slug: "img_7_2022",
    },
    {
      images: ["IMG_2288.JPG"],
      slug: "img_8_2022",
    },
    {
      images: ["IMG_2289.JPG"],
      slug: "img_9_2022",
    },
    {
      images: ["IMG_1093.JPG"],
      slug: "img_4_2022",
    },
    {
      images: ["IMG_2295.JPG"],
      slug: "img_11_2022",
    },
  ],
};
