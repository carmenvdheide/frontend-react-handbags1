import './App.css'
import Button from "../components/button.jsx";
import Product from "../components/product.jsx";
import Tile from "../components/tile.jsx";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
            <Button name="to the collection" disabled={false}/>
            <Button name="shop all bags" disabled={false}/>
            <Button name="pre-orders" disabled={true}/>
          </nav>
          <main>

              <Product
                  label="Best seller"
                  image="./src/assets/bag_1.png"
                  productName="The handy bag"
                  price="400"
              />
              <Product
                  label="Best seller"
                  image="./src/assets/bag_2.png"
                  productName="The stylish bag"
                  price="250"
              />
              <Product
                  label="New collection"
                  image="./src/assets/bag_3.png"
                  productName="The simple bag"
                  price="300"
              />
              <Product
                  label="New collection"
                  image="./src/assets/bag_4.png"
                  productName="The trendy bag"
                  price="150"
              />
          </main>

          <footer>
              <Tile>
                  title="The brand"
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt dolorem dolores, eaque eius eligendi et ex facilis, laboriosam natus odit officia perferendis quae quia rerum sapiente sit temporibus voluptates.</p>
                  <p>lorem</p>
              </Tile>
              <Tile
                  img="./src/assets/brand.png"
              />
              <Tile
              img="./src/assets/our_story.png"
              />
              <Tile>
                  title="our story"
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, soluta, voluptatibus! Accusamus accusantium at esse excepturi hic, non officiis praesentium quam, quas quibusdam recusandae sit sunt suscipit vitae voluptatem voluptatum?</p>
              </Tile>


          </footer>


      </>
  )
}

export default App
