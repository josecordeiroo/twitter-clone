import React from "react";

import {Container, Item, Title} from './styles'

const List = () => {
    return ( <Container>
        <Item>
            <Title>
                <h2>Talvez você curta:</h2>
            </Title>
        </Item>
        <Item>
            <h3>Teste</h3>
            <h3>Teste</h3>
            <h3>Teste</h3>
        </Item>
    </Container> );
}
 
export default List;