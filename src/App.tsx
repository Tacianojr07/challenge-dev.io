import * as Styles from "./style/style.app";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { api } from "./services/axios";

type Coffee = {
  id: number;
  name_coffee: string;
  url: string;
  price: number;
  amount: number;
};

function App() {
  useEffect(() => {
    async function getCoffees() {
      const response = await api.get("/coffee");
      setCoffee(response.data);
    }

    getCoffees();
  }, []);

  const [Coffee, setCoffee] = useState<Coffee[]>([]);

  const handleSouldOut = () => {};

  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Header>
          <Styles.Title>Our Collection</Styles.Title>
          <Styles.paragraph>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </Styles.paragraph>

          <Styles.ButtonsFlex>
            <button>all products</button>
            <button>Available now</button>
          </Styles.ButtonsFlex>
        </Styles.Header>

        <Styles.ContainerProducts>
          {Coffee.map((item) => (
            <Styles.Products key={item.id}>
              <img src={item.url} />
              <Styles.CoffeeContent>
                <p>{item.name_coffee}</p>
                <span>
                  {item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </Styles.CoffeeContent>
              <Styles.CoffeeNotes>
                <button>
                  <FaStar size={20} color="#ffdf00" />
                </button>
                <p>4.7</p>
              </Styles.CoffeeNotes>
              <Styles.Notes>
                <span style={{ fontSize: 10 }}>(65 votes)</span>
                <p></p>
                {item.amount <= 0 && <p>Sold Out</p>}
              </Styles.Notes>
            </Styles.Products>
          ))}
        </Styles.ContainerProducts>
      </Styles.Main>
    </Styles.Container>
  );
}

export default App;
