const dateNow=new Date()
const generateSeralNo = (count) => {
    if (count.toString().length <= 4) {
      const prefixZeros = "0000";
      return prefixZeros.slice(0, prefixZeros.length - count) + count;
    }
    return count;
  };
const generateId=(name,count)=>{
    const date=dateNow.getFullYear().toString().slice(-2)
    return `${date}${name.slice(0,3)}${generateSeralNo(count)}`

}



module.exports={generateId}