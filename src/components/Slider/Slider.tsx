import { Heading, Image, Stack, Link, Flex, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import style from "./style.module.css";
import { theme } from "../../styles/theme";

SwiperCore.use([Navigation, Pagination]);

const SlidesItems = [
  {
    title: "Europa",
    description: "O continente mais antigo",
    imagePath: "/continents/europe.jpeg",
    linkPath: "/europe",
  },
  {
    title: "Africa",
    description: "Natureza Selvagem",
    imagePath: "/continents/africa.jpeg",
    linkPath: "/africa",
  },
  {
    title: "Asia",
    description: "O poder do oriente",
    imagePath: "/continents/asia.jpeg",
    linkPath: "/asia",
  },
  {
    title: "America do Norte",
    description: "Captalismo puro",
    imagePath: "/continents/north_america.jpeg",
    linkPath: "/north_america",
  },
  {
    title: "America do Sul",
    description: "Natureza bela",
    imagePath: "/continents/south_america.jpeg",
    linkPath: "/south_america",
  },
  {
    title: "Oceania",
    description: "Kanguru",
    imagePath: "/continents/oceania.jpg",
    linkPath: "/oceania",
  },
];
export default function Slider() {
  return (
    <>
      <Flex maxWidth={1240} height={450} mb="20" mx="auto">
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${style.bullets} swiper-pagination-bullet"
                            style=background-color:${theme.colors.highlight}
                      ></span>`;
            },
          }}
          spaceBetween={0}
          slidesPerView={1}
        >
          <Box
            className="swiper-button-next"
            color={theme.colors.highlight}
          ></Box>
          <Box
            className="swiper-button-prev"
            color={theme.colors.highlight}
          ></Box>
          {SlidesItems.map((item) => {
            return (
              <SwiperSlide key={item.imagePath}>
                <Link href={item.linkPath}>
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />

                  <Flex
                    color={theme.colors.light.info}
                    position="absolute"
                    top="0"
                    right="0"
                    width="100%"
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack
                      alignItems="center"
                      textShadow="0 0 3px black, 0 0 5px black"
                      textAlign="center"
                    >
                      <Heading
                        as="h1"
                        fontSize={["2.00rem", "2.15rem", "2.25rem"]}
                        mb="1rem"
                      >
                        {item.title}
                      </Heading>
                      <Heading
                        as="h2"
                        fontSize={["1.25rem", "1.40rem", "1.5rem"]}
                        lineHeight={["1.85rem", "1.85rem", "3.37rem"]}
                      >
                        {item.description}
                      </Heading>
                    </Stack>
                  </Flex>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </>
  );
}
