import { Box, Flex, Icon, IconButton, Input, Spacer } from "./chakra-ui";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <Flex
      sx={{
        bgColor: "white",
        px: { base: 2, sm: 3, md: 7 },
        py: { base: 2, sm: 3, md: 4 },
        width: "100%",
        borderRadius: "full",
        alignItems: "center",
      }}
    >
      <Input
        type="text"
        placeholder="Explore news..."
        size="lg"
        variant="filled"
        bgColor="white"
        focusBorderColor="white"
        sx={{
          "&:hover": {
            bgColor: "white",
          },
        }}
      />
      <Spacer />
      <IconButton
        sx={{
          bgColor: "white",
          "&:hover": {
            bgColor: "white",
          },
        }}
      >
        <Icon
          sx={{
            width: "30px",
            height: "30px",
            ml: 2,
            mt: 2,
          }}
        >
          <AiOutlineSearch />
        </Icon>
      </IconButton>
    </Flex>
  );
};

export default Searchbar;
