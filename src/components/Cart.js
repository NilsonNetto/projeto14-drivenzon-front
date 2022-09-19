import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getCart } from "../services/drivenzon.js";
import UserContext from "../contexts/UserContext.js";
import Item from "./Item.js";


export default function Cart() {

  const userData = useContext(UserContext);
  const [userCart, setUserCart] = useState([]);
  const [cartPrice, setCartPrice] = useState('');

  /*   useEffect(() => {
      if (userData) {
        const config = {
          headers: {
            Authorization: `Bearer: ${userData.token}`
          }
        };
  
        getCart(config)
          .then(res => {
            calculateCartPrice(res.data.userCart);
            setUserCart(res.data.userCart);
          })
          .catch(res => {
            console.log(res.data);
            alert('Error');
          });
      }
    }, []); */

  const testeCarrinho = [{
    title: "Titulo do item 00",
    description: "Descrição do item 00",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 2000,
    quantity: 2,
    inventory: 5
  },
  {
    title: "Titulo do item 01",
    description: "Descrição do item 01",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 855,
    quantity: 2,
    inventory: 5
  },
  {
    title: "Titulo do item 02",
    description: "Descrição do item 02",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 1000,
    quantity: 3,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/f/o/fone-de-ouvido-bluetooth-pfo01bt-philco_307798_1.jpg",
    price: 10000,
    quantity: 1,
    inventory: 5
  }];

  function calculateCartPrice(cart) {
    let totalPrice = 0;
    cart.map(product => { totalPrice += (product.price * product.quantity); });
    setCartPrice((totalPrice / 100).toFixed(2));
  }

  useEffect(() => {
    calculateCartPrice(testeCarrinho);
  }, []);

  return (
    <Wrapper>
      <Items>
        {testeCarrinho.map((item, index) => <Item key={index} itemData={item} />)}
      </Items>
      <Total>
        <p>Total</p>
        <p>D$ {cartPrice}</p>
      </Total>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  padding: 20px;
  margin-top: 50px;
  position: absolute;
`;

const Items = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #333333;
  border-radius: 5px 5px 0 0;
  color: #333333;
  font-size: 16px;
  gap: 15px;
`;

const Total = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #333333;
  background-color: magenta;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: #333333;
  position: relative;
  bottom: 0;
  left: 0;
`

