
      
  //     )}
  //     <h1>{madLibTitle}</h1>
  //     <form>
  //         {subWords.map(sub => (
  //           <input type="text" name={sub.SubID} 
  //           value={sub.InpDefault}
  //           onChange={setMadLib}
  //           />
  //         ))}
  //     </form>
  // </Container>              



// const EntryForm = () => {
    
//       const [madLib, setMadLib]  = useState("")

//       const { madLibTitle, imageURL, madLibText, subWords } = jsonData

//       function handleChange (event) {
//         const {key, value} = event.target

//         setMadLib((prevValue) =>  {
//           console.log(prevValue)
//           console.log(value)
//             return (
//               {
//               ... prevValue,
//               [subWords.InpDefault]: value
//               }
//             )
//           }
//         )
//       }

//       return (
//         <Container Fluid>
//           <h1>{madLibTitle}</h1>
//           <form>
//               {subWords.map(sub => (
//                 <input type="text" name={sub.SubID} 
//                 value={sub.InpDefault}
//                 onChange={setMadLib}
//                 />
//               ))}
//           </form>
//       </Container>              


//     )
// }

export default EntryForm


// {jsonData.map((data, key) => {
//   return(
//     <div key={key}>
//       {data.MadLibTitle}<br/>
//       {data.MadLibText}<br/>
//       <p>
//       {data.SubWords.map(sub => (
//         <input type="text" label="noun" value={sub.InpDefault} placeHolder="text" onChange={(e) => {setWord(e.target.value)}}/>
//       )
//       )}