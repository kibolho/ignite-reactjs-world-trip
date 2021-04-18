import {Flex } from "@chakra-ui/react";
import TravelTypesItems from "./TravelTypesItems";

export default function TravelTypes() {

  return(
    <Flex
      wrap="wrap"
      maxW={1160}
      height="9rem"
      px={["0rem", "1rem"]}
      mx={["3.12rem", "3.12rem", "auto"]}
      mt="20"
      justifyContent="space-between"
      position="relative"
      _after={{
        content:'""',
        position: "absolute",
        width: "5.62rem",
        height: "2px",
        backgroundColor: "#47585B",
        bottom: "-10",
        right: "50%",
        transform: "translateX(50%)",
      }}
    >
      <TravelTypesItems text="vida noturna" img_url="/travel-icons/cocktail.svg" />
      <TravelTypesItems text="praia" img_url="/travel-icons/surf.svg"/>
      <TravelTypesItems text="moderno" img_url="/travel-icons/building.svg"/>
      <TravelTypesItems text="clássico" img_url="/travel-icons/museum.svg"/>
      <TravelTypesItems text="e mais..." img_url="/travel-icons/earth.svg"/>
    </Flex>
  )
}