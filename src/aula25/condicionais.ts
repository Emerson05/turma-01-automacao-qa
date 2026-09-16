const statusCode:number = 500;

if (statusCode === 200){
    console.log("Ok: recurso retornado");
}
else if(statusCode === 201){
    console.log("Created: recurso criado")
}else{
    console.log(`Status inesperado; ${statusCode}`)
}
// Operador ternario decisão de uma linha só
const resultado = statusCode < 400  ? "passou" : "falhou"
console.log(resultado)