import { useState } from "react";
import { listUsers } from "./db/list";
import { Button, Text, Flex, Center } from "@chakra-ui/react";
import { PrizeList } from "./components/PrizeList";
function App() {
  const [number, setNumber] = useState(0);
  const [winner, setWinner] = useState("O vencedor é...");
  const [userList, setUserList] = useState([]);

  const call = () => {
    const sort = Math.floor(Math.random() * listUsers.length);
    const winner = listUsers[sort];
    setNumber(winner.number);
    setWinner(winner.name);
    winnersList(winner);
  };

  const reset = () => {
    setNumber(0);
    setWinner("O vencedor é...");
    setUserList([]);
  };

  const winnersList = (user) => {
    const newList = [...userList, user];
    setUserList(newList);
  };

  return (
    <Center bg="tomato" h="929px" color="white">
      <Flex align="center" justify="center" direction="column">
        <Flex gap="20">
          <Button
            color="blackAlpha.800"
            size="lg"
            onClick={() => {
              call();
            }}
          >
            Sortear
          </Button>
          <Button
            color="blackAlpha.800"
            size="lg"
            onClick={() => {
              reset();
            }}
          >
            Resetar
          </Button>
        </Flex>

        <Text as="b" fontSize="6xl">
          {number}
        </Text>
        <Text fontSize="6xl">{winner}</Text>
        <PrizeList userList={userList} />
      </Flex>
    </Center>
  );
}

export default App;
