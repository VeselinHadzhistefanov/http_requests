async function getData() {
  const url = 'http://localhost:3000/data'
  try {
    fetch(url, {
      method: "GET",
      mode: "cors"
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  catch (e) {
    console.error(e)
  }
};
getData();
