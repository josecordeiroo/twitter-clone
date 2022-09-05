import React from "react";

import {Container, Item, Title} from './styles'

const List = () => {
    return ( <Container>
        <Item>
            <Title>
                <h3>O que está acontecendo</h3>
            </Title>
        </Item>
        <Item>
            <span>
                Entretenimento
            </span>
            <strong>
                Javascript
            </strong>
        </Item>

        <Item>
            <span>
                Música
            </span>
            <strong>
                React.JS
            </strong>
        </Item>

        <Item>
            <span>
                Asssuntos do momento
            </span>
            <strong>
                Node.JS
            </strong>
        </Item>
    </Container> );
}
 
export default List;