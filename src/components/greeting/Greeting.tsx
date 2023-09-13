import React from 'react'
import {
  GreetingContainer,
  Box,
  Text,
  Title,
  Description,
  Button,
  Img,
} from './Greeting.styled'

export const Greeting = () => {
  return (
    <GreetingContainer>
      <Box>
        <Text>
          <Title>Дерев’яні вироби на будь-який смак</Title>
          <Description>
            Вітаємо в інтернет-магазині КАРЛОТЕКА. Ми виготовляємо якісні
            дерев'яні вироби. У нас ви можете купити або замовити іграшкові
            мечі, щити, машинки, пазли, 3Д пазли, посуд з дерева (підноси для
            піци, посуд для суші, підноси для подачі кави) для ресторанів, кафе,
            барів, магазинів тощо.
          </Description>
          <Button>
            <button type="submit">Детальніше</button>
            <img src="img/arrow-right.png" alt="arrow right" />
          </Button>
        </Text>
        <Img>
          <img src="img/Shield_and_sword.png" alt="Shield and sword" />
        </Img>
      </Box>
    </GreetingContainer>
  )
}
