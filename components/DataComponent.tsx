import axios from "axios";
import { useEffect, useState } from "react";

export default function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>Completed: {data.completed.toString()}</p>
        </div>
      ) : (
        "Loading..."
      )}
      <div>
        <h2>Her er din data</h2>
        {data ? (
          Object.entries(data).map(([key, value]) => (
            <li key={key}>
              {key}: {value.toString()}
            </li>
          ))
        ) : (
          <div>no data was returned</div>
        )}
      </div>
    </div>
  );
}
