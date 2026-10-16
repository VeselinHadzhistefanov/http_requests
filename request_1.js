async function getData() {
  const url = "http://localhost:3000/data"
  try {
    const res = await fetch(url, {
      method : "GET",
      mode: "no-cors",
      
    })

    // if(!res.ok){
    //   console.log("Fetch request yielded invalid response.")
    //   throw new Error(`Response status: ${response.status}`);
    // }

    console.log(res)
    const result = await res.blob()
    console.log(result)
    return result
  }
  catch (e){
    console.log(e)
  }
}
getData()