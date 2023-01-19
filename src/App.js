import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  //Modificando o card com os valores da API
  const cardScreen = users.map((user) => {
    return <Card name={user.name} />;
  });

  return (
    <>
      <ChakraProvider>
        <Main>{cardScreen}</Main>
      </ChakraProvider>
    </>
  );
}
