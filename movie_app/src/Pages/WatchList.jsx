import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import ItemsReused from "../Components/ItemsReused";

const Favourite = () => {
  let watchListMovies =
    JSON.parse(localStorage.getItem("watchListMovies")) || [];

  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Heading pt="100px" textAlign={"center"}>
          Favourite Movies
        </Heading>
      </Box>

      <SimpleGrid margin="auto" gap="20px" columns={["1", "1", "2", "4"]}>
        {watchListMovies?.map((el) => (
          <ItemsReused key={el.id} el={el} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Favourite;
