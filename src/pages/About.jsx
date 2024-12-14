import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const { state: country } = useLocation();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">{country.name.common}</h1>
      <img src={country.flags.png} alt="flag" className="w-[300px] h-[200px] mb-5" />
      <p className="text-xl">Population: {country.population.toLocaleString()}</p>
      <p className="text-xl">Region: {country.region}</p>
      <p className="text-xl">Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <p className="text-xl">Subregion: {country.subregion}</p>
      <p className="text-xl">Languages: {Object.values(country.languages || {}).join(", ")}</p>
      <p className="text-xl">Currencies: {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
    </div>
  );
}
export default About;



// import React, {useEffect} from 'react'
// import Header from '../components/Header'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function About() {
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       axios
//         .get(`https://restcountries.com/v3.1/all/${id}`)
//         .then((res) => {
//           if (res.status === 200) {
//             console.log(res.data)
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [id]);

//   return (
//     <div>
//       <Header />
//       about
//     </div>
//   )
// }

// export default About

// import React, { useRef } from 'react'

// function About() {
//     const nameRef = useRef(null)
//     const emailRef = useRef(null)

//     function handlesubmit(e) {
//         e.preventDefault();
//         console.log(nameRef.current.value);
//         console.log(emailRef.current.value);
//         nameRef.current.style.outlineColor = 'red'
//     }
//     return (
//         <div>
//             <form onSubmit={handlesubmit}>
//                 <input type="text" ref={nameRef} />
//                 <input type="email" ref={emailRef} />
//                 <button>Save</button>
//             </form>
//         </div>
//     )
// }

// export default About