async function getData() {
  const url = 'http://localhost:3000/data'
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors"
    })
    console.log(response)

    const data = await response.json()
    console.log(data)
  } 
  catch (e) {
    console.error(e)
  }
};
getData();
