import React, { useState } from "react";
import Navbar from "./componant/navbar/Navbar";
import Test from "./componant/test/Form";
import ExpanceList from "./componant/test/ExpanceList";
import Filter from "./componant/test/Filter";
const App = () => {
  const catagory = ["Grosary", "Utilities", "Entertainment"];
  const [filter, setFilter] = useState("");
  const [open, setopen] = useState(false);

  const [expances, Setexpances] = useState([
    { id: 1, Discription: "aaa", Amount: 10, catagory: "Entertainment" },
    { id: 2, Discription: "bbb", Amount: 10, catagory: "Utilities" },
    { id: 3, Discription: "ccc", Amount: 10, catagory: "Entertainment" },
    { id: 4, Discription: "ddd", Amount: 10, catagory: "Entertainment" },
  ]);

  const visible = filter
    ? expances.filter((e) => e.catagory === filter)
    : expances;
  return (
    <>
      <Navbar />
      {/* <Body /> */}
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="m-3"
      >
        <button onClick={() => setopen(true)} className="btn btn-primary">
          Add expance
        </button>
      </div>

      {open && (
        <Test
          catagory={catagory}
          submit={(data) => {
            return (
              Setexpances([...expances, { ...data, id: expances.length + 1 }]),
              setopen(false)
            );
          }}
        />
      )}

      <Filter
        setFilter={(catagory) => setFilter(catagory)}
        catagory={catagory}
      />
      <ExpanceList
        expances={visible}
        handleclick={(id) => {
          Setexpances(expances.filter((a) => a.id != id));
        }}
      />
    </>
  );
};

export default App;
