const randomNum=()=>Math.floor(Math.random()*100);
const getRandomColor=()=>`rgb(${randomNum()},${randomNum()},${randomNum()})`;

export default getRandomColor