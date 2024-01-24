function App() {
  return (
    <div>
      <header>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <div>
          <button>All Products</button>
          <button>Available Now</button>
        </div>
      </header>

      <main>
        <div>
          <img
            src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="coffee img"
          />
          <div>
            <p>name coffee</p>
            <span>price</span>
          </div>
          <div>
            <button></button>
            <p>votes</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
