import React, { useContext, useState, useEffect } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { PreWrapper } from "../styles/Welcome.styled";

const Curl: React.FC = () => {
  const { arg } = useContext(termContext);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from:", arg[0]); // Add this log
        const response = await fetch(arg[0]);
        const responseData = await response.text();
        setData(responseData);
      } catch (error) {
        setError(`curl: could not fetch URL ${arg[0]}. Details: ${error}`);
      }
    };

    if (arg.length > 0) {
      fetchData();
    }
  }, [arg]);


  if (arg.length === 0) {
    return <Wrapper>curl: no URL provided</Wrapper>;
  }

  if (error) {
    return <pre>{error}</pre>;
  }

  if (!data) {
    return <Wrapper>Loading...</Wrapper>;
  }

  return <pre>{data}</pre>;
};

export default Curl;
