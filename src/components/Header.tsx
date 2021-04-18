import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, IconButton,useBreakpointValue } from "@chakra-ui/react";

interface HeaderProps {
  haveBackButton?: boolean;
}
export default function Header({ haveBackButton }: HeaderProps) {
  const isSmallVersion = useBreakpointValue({
    sm: false,
    base: true,
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="28"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="center"
    >
      {haveBackButton && !isSmallVersion && (
        <Box pos="absolute" left={["-1rem","1rem","2rem","10rem"]}>
        <Link href="/">
          <IconButton aria-label="Back" icon={<ArrowBackIcon />} />
        </Link>
        </Box>
      )}
      <Link href="/">
        <Image src="/Logo.svg" alt="logo" width="11.5rem" height="2.85rem" />
      </Link>
    </Flex>
  );
}
