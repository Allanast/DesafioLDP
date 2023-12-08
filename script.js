console.log("Ano novo está chegando!!");
let mariahCareyName = "Mariah Carey";
let mariahCareyAge = 53;
let ano = 2023;

console.log(mariahCareyName + " está com " + mariahCareyAge + " anos!");

console.log("O ano atual é " + ano);

let nascimento = ano - mariahCareyAge ;
console.log("A data de nascimento da Mariah Carey é: " + nascimento);

let quartaFeira = true;
console.log("A variável quartaFeira é: " + quartaFeira);

let idade = 22
if (idade > 18) {
    msg = "Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey";
} else {
    msg = "Sinto muito, mas assistirá da TV Globo";
}
console.log(msg);

let mesBirthday = "julho";
if(mesBirthday === "julho" || mesBirthday === "dezembro" || mesBirthday === "junho"){
  console.log("Uma ou mais opções estão corretas. O mês escolhido foi o mês ${mesBirthday}.")
} else {
  console.log("Algo de errado não está certo, o mês digitado foi o mês ${mesBirthday}.")
} 
