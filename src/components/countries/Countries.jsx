import { useEffect, useState } from 'react';
import Country from '../country/Country';
export default function Countries() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const handelData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const dataValue = await res.json();
      console.log(dataValue);
      setData(dataValue);
    };
    handelData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-8 lg:mx-10">
      {data.map((country, index) => (
        <Country key={index} country={country}></Country>
      ))}
    </div>
  );
}
