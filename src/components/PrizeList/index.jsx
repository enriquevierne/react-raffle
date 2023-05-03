import { Text } from "@chakra-ui/react";

export const PrizeList = ({ userList }) => {
    
  return (
    <ol>
      {userList.map((user) => {
        return (
          <li key={user.number}>
            <Text as="b" fontSize="3xl">Nome: {user.name} | Número: {user.number}</Text>
          </li>
        );
      })}
    </ol>
  );
};
