async function getProducts(){
    const res = await fetch("http://localhost:9000/products");
    const resJson = await res.json();
    return resJson
}