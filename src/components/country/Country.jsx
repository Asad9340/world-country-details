import { useState } from "react";

function Country({ country }) {
  const [visited , setVisited] = useState(false)
  const { flags, name, capital, continents, area, independent } = country;


  const handelClick = () => {
    setVisited(!visited);
  }

  return (
    <div className="my-2 p-4 border border-gray-700 rounded-xl hover:bg-gray-800 hover:text-white hover:duration-300">
      <div className="flex justify-center">
        <img
          className="rounded-lg object-contain mb-4"
          src={flags.png}
          alt=""
        />
      </div>
      <h3 className="text-2xl font-semibold text-center">{name.common}</h3>{' '}
      <hr className="border border-green-800 my-2" />
      <p>Capital: {capital}</p>
      <p>Continents: {continents}</p>
      <p>Area: {area} square Kilometer</p>
      <p>Independent: {independent ? 'Yes' : 'No'}</p>
      <p>{ visited?"I have visited this place":"Not visited . I will visit it soon"}</p>
      <div className="flex gap-4 mt-4">
        <button onClick={handelClick} className="py-2 px-6 bg-indigo-700 hover:bg-indigo-800 border border-indigo-800 hover:border hover:border-red-900 text-white rounded-lg outline-none">
          {visited?"Visited":'Going'}
        </button>
        <button className="py-2 px-6 bg-indigo-700 hover:bg-indigo-800 border border-indigo-800 hover:border hover:border-red-900 text-white rounded-lg outline-none">
          Mark
        </button>
        <button className="py-2 px-6 bg-indigo-700 hover:bg-indigo-800 border border-indigo-800 hover:border hover:border-red-900 text-white rounded-lg outline-none">
          Count
        </button>
      </div>
    </div>
  );
}

export default Country;
