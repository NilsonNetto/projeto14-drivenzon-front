import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getCart } from "../services/drivenzon.js";
import UserContext from "../contexts/UserContext.js";

export default function Cart() {

  const userData = useContext(UserContext);
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    if (userData) {
      const config = {
        headers: {
          Authorization: `Bearer: ${userData.token}`
        }
      };

      getCart(config)
        .then(res => {
          setUserCart(res.data);
        })
        .catch(res => {
          console.log(res.data);
          alert('Error');
        });
    }
  }, []);



  return (
    <Wrapper>
      <Items>
        <Item>
          <Description>
            <h1>Foto do item</h1>
            <h3>Titulo com o nome do item</h3>
            <p>Descrição do item</p>
          </Description>
          <Price>
            <p>R$ Item Price</p>
            <p>Qtdade: 1</p>
            <h3>R$ Total price</h3>
          </Price>
        </Item>
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
`;
const Price = styled.div`
`;