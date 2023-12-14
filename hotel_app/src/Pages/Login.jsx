import { signInWithPopup } from "firebase/auth";
import { Box, Button, Heading } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Firebase/firebase";
const Login = () => {
  let details = JSON.parse(localStorage.getItem("details"));
  let navigate = useNavigate();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        let userArr = [];
        userArr.push(res.user.accessToken);
        userArr.push(res.user.displayName);
        userArr.push(res.user.email);
        userArr.push(res.user.photoURL);
        localStorage.setItem("details", JSON.stringify(userArr));
        return navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  if (details) {
    return navigate("/");
  } else {
    return (
      <Box bg="black">
        <Heading color="white" textAlign="center">
          Hotel App
        </Heading>
        <Box
          display="grid"
          height="120vh"
          justifyContent="center"
          alignItems="center"
          marginTop="-40"
        >
          <Button padding={[5, 5, 5, 9]} onClick={handleGoogle}>
            Login with Google{" "}
            <FcGoogle style={{ fontSize: "35px", margin: "2px" }} />
          </Button>
        </Box>
      </Box>
    );
  }
};

export default Login;
