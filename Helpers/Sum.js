export const getSumOfArray = (arr) => {
    console.log("*******This is fuction array******", arr);
    
    return arr.reduce((total, num) => total + num);
}