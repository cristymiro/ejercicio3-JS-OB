document.write('Iterando números del 1 al 100 + imprimiento por pantalla los pares y impares')
document.write('<br>'+ '<br>')


for(i=1; i <=100; i++){
    if(i%2==0){
        document.write(i + ' es un número par.'+ '<br>')
    }else{
        document.write(i + ' es un número impar.' + '<br>')
    }
}

document.write('<br>'+ '<br>')

document.write('Iterando números del 1 al 10 + imprimiento por pantalla los números primos')
document.write('<br>'+ '<br>')

for(i=1; i<=10; i++){
   switch(i){
       case 1:
           document.write(i + '<br>');
           break;
        case 2:
            document.write(i + ' es un número primo ' + '<br>');
            break;
        case 3:
            document.write(i + ' es un número primo ' + '<br>');
            break;
        case 4:
            document.write(i + '<br>');
            break;
        case 5:
            document.write(i + ' es un número primo '+ '<br>');
            break;
        case 6:
            document.write(i + '<br>');
            break;
        case 7:
            document.write(i + ' es un número primo '+ '<br>');
            break;
        case 8:
            document.write(i + '<br>');
            break;
        case 9:
            document.write(i + '<br>');
            break;
        case 10:
            document.write(i + '<br>');

   }
}