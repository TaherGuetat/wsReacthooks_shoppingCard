import { useState } from "react";
import "./App.css";
import { FilterProdact } from "./Components/FilterProduct";
import { Panier } from "./Components/Panier";
import ProductList from "./Components/ProductList";
import { products } from "./data";

function App() {
  const [panier, setPanier] = useState([]);
  const [list, setList] = useState(products);
  const [total, setTotal] = useState(0);
  const [filterbn, setFilterbn] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("All");

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleFilterbn = (value) => {
    setFilterbn(value);
  };
  const handleFilterrate = (value) => {
    setValue(value);
  };

  const handelAdd = (newproduct) => {
    const existProd = panier.find((el) => el.id == newproduct.id);
    if (!existProd) {
      setPanier([{ ...newproduct, qteA: 1, pT: newproduct.price }, ...panier]);
      setTotal(total + newproduct.price);
      setList(
        list.map((el) =>
          el.id == newproduct.id
            ? {
                ...el,

                QtS: el.QtS - 1,
              }
            : el
        )
      );
    } else {
      alert("le produit est deja ajoute");
    }
  };
  const increament = (elm) => {
    if (elm.QtS > elm.qteA) {
      setPanier(
        panier.map((el) =>
          el.id == elm.id
            ? {
                ...el,
                qteA: el.qteA + 1,

                pT: el.pT + el.price,
              }
            : el
        )
      );
      setList(
        list.map((el) =>
          el.id == elm.id
            ? {
                ...el,

                QtS: el.QtS - 1,
              }
            : el
        )
      );
      setTotal(total + elm.price);
    } else alert("fin du stock");
  };
  const decreament = (elm) => {
    if (elm.qteA > 1) {
      setPanier(
        panier.map((el) =>
          el.id == elm.id
            ? {
                ...el,
                qteA: el.qteA - 1,

                pT: el.pT - el.price,
              }
            : el
        )
      );
      setList(
        list.map((el) =>
          el.id == elm.id
            ? {
                ...el,

                QtS: el.QtS + 1,
              }
            : el
        )
      );
      setTotal(total - elm.price);
    } else alert("ma3adnech");
  };
  const handleDelete = (elm) => {
    setPanier(panier.filter((el) => el.id !== elm.id));
    setList(
      list.map((el) =>
        el.id == elm.id
          ? {
              ...el,

              QtS: el.QtS + elm.qteA,
            }
          : el
      )
    );
    setTotal(total - elm.pT);
  };
  return (
    <div className="App">
      <FilterProdact
        handleFilterbn={handleFilterbn}
        handleFilterrate={handleFilterrate}
        handleCategory={handleCategory}
      />
      <ProductList
        list={category=='All'?
          list.filter(
          (el) =>
            el.title.toLowerCase().includes(filterbn.trim().toLowerCase()) &&
            el.rating.rate >= value 
        ): list.filter(
          (el) =>
            el.title.toLowerCase().includes(filterbn.trim().toLowerCase()) &&
            el.rating.rate >= value && el.category==category
        )
}
        handelAdd={handelAdd}
      />
      <Panier
        panier={panier}
        total={total}
        increament={increament}
        decreament={decreament}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
