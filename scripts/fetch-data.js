async function fetchData(){
    const response= await fetch('./scripts/jsonData.txt');
    console.log(response);
    const result= await response.json();
    console.log(result);
}
fetchData();