import * as Styles from "./style/style.app";

function App() {
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
          <Styles.Products>
            <img
              src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div>
              <p>cafe</p>
              <span>price</span>
            </div>
            <div>
              <button></button>
              <p>4.7</p>
              <span>(65 votes)</span>
            </div>
          </Styles.Products>
        </Styles.ContainerProducts>
      </Styles.Main>
    </Styles.Container>
  );
}

export default App;
