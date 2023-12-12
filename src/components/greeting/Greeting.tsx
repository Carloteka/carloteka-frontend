import React from 'react';
import {
  GreetingContainer,
  Box,
  Title,
  Description,
  Button,

} from './Greeting.styled'

export const Greeting = () => {
  return (
    <GreetingContainer>
      <Box>
        <div>
          <Title>Дерев’яні вироби на будь-який смак</Title>
          <Description>
            Вітаємо в інтернет-магазині КАРЛОТЕКА. Ми виготовляємо якісні
            дерев'яні вироби. У нас ви можете купити або замовити іграшкові
            мечі, щити, машинки, пазли, 3Д пазли, посуд з дерева (підноси для
            піци, посуд для суші, підноси для подачі кави) для ресторанів, кафе,
            барів, магазинів тощо.
          </Description>
            <Button type="submit">Детальніше<img src="img/arrow-right.png" alt="arrow right" width={16} height={16 }/></Button>
        </div>
        <img src="img/Shield_and_sword.png" alt="Shield and sword" width={640} height={646} />
      </Box>
    </GreetingContainer>
  )
}
