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
      images: ["IMG_0803.JPG"],
      slug: "img_1_2022",
    },
    {
      images: ["IMG_0965.JPG"],
      slug: "img_2_2022",
    },
    {
      images: ["IMG_1091.JPG"],
      slug: "img_3_2022",
    },
    {
      images: ["IMG_1093.JPG"],
      slug: "img_4_2022",
    },
    {
      images: ["IMG_1448.JPG"],
      slug: "img_5_2022",
    },
    {
      images: ["IMG_2285.JPG"],
      slug: "img_6_2022",
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
      images: ["IMG_2292.JPG"],
      slug: "img_10_2022",
    },
    {
      images: ["IMG_2295.JPG"],
      slug: "img_11_2022",
    },
    {
      images: ["IMG_2297.JPG"],
      slug: "img_12_2022",
    },
    {
      images: ["IMG_2299.JPG"],
      slug: "img_13_2022",
    },
    {
      images: ["IMG_2301.JPG"],
      slug: "img_14_2022",
    },
  ],
};
