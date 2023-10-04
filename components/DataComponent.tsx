import axios from "axios";
import { useEffect, useState } from "react";

export default function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // bruk ett API-kall og hente data fra
    // "https://jsonplaceholder.typicode.com/todos/1"
    // bruk axios, fetch eller /api for at gjøre det
    // data legges i state
  }, []);

  return (
    <div>
      {data
        ? ""
        : // hvis vi har data skall vi skrive ut title som en titel
          // og om vise om completed er true eller false
          "Loading..."}
      <div>
        {data ? (
          // skriv ut allt vi har i data (det er ett objekt) så vi får ut det på skjermen
          'her skall det stå "userIdidtitlecompleted" el motsvarande'
        ) : (
          <div>no data was returned</div>
        )}
      </div>
    </div>
  );
}
