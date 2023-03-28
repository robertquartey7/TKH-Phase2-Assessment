import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);
function App() {
  const { data, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/pokemon",
    fetcher
  );



  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data && (
        <div>
          {data.results.map((element) => {
            return (
              <div
                style={{
                  border: "solid",
                  padding: "1rem",
                }}
              >
                <h1>{element.name}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
