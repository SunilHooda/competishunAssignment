import { Box, Button, Heading, Image, Text, useToast } from "@chakra-ui/react";

import React from "react";
import { useNavigate } from "react-router-dom";

const Items = ({ el }) => {
  let favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  let watchListMovies =
    JSON.parse(localStorage.getItem("watchListMovies")) || [];

  const navigate = useNavigate();
  const toast = useToast();

  const handlefav = async (el) => {
    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify([...favoriteMovies, el])
    );

    toast({
      title: "Added to your favourite",
      status: "success",
      isClosable: true,
    });
  };

  const handlewatch = async () => {
    localStorage.setItem(
      "watchListMovies",
      JSON.stringify([...watchListMovies, el])
    );
    toast({
      title: "Added to your watchlist",
      status: "success",
      isClosable: true,
    });
  };
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        bg="white"
      >
        <Box h="350" w="100%" m="auto">
          <Image
            h="100%"
            w="100%"
            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
            alt="Image"
            onClick={() => navigate(`/singlepage/${el.id}`)}
          />
        </Box>
        <Box p="6">
          <Box alignItems="baseline">
            <Box gap="10px">
              <Box gap="7px" alignItems="center">
                <Heading size="md">{el.original_title}</Heading>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color="gray.600"
                  mr="2"
                >
                  Release Date: {el.release_date}
                </Text>
              </Box>
            </Box>
          </Box>

          <Box display="flex" gap="10" justifyContent="center" mt="10">
            <Button
              _hover={{ bg: "blue" }}
              color="white"
              bg="black"
              onClick={() => handlefav(el)}
            >
              Favourite
            </Button>

            <Button
              _hover={{ bg: "blue" }}
              color="white"
              bg="black"
              onClick={() => handlewatch(el)}
            >
              WatchList
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Items;
