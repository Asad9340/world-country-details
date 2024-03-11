import { useEffect, useState } from 'react';
import Country from '../country/Country';
export default function Countries() {
  const [data, setData] = useState([]);
  const [count , setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }
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
    <div>
      <h3 className="text-3xl font-semibold my-6 text-center">
        Click Counter : <span className='text-red-700 font-extrabold'>{count}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-8 lg:mx-10">
        {data.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleCount={handleCount}
          ></Country>
        ))}
      </div>
    </div>
  );
}
