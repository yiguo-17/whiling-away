function challengeBanner(num){
  console.log('######### Challenge '+ num + ' #########');
}
challengeBanner(1);
function challenge1(){
  let num = 1;
  while (num <= 5){
    console.log(num);
    num = num + 1;
  }
}

challengeBanner(2);
function challenge2(mx){
  let num = 1;
  while (num <= mx){
    console.log(num);
    num = num+ 1;
  }
}

challengeBanner(3);
function challenge3(mn, mx){
  let num = mn;
  while (num <= mx){
    console.log(num);
    num = num+ 1;
    }
}

challengeBanner(4);
function challenge4(mx){
  let num = 1;
  let r = num % 2;
  let oae = '';
  if (r = 1){oae =' Odd';}
  else{oae = ' Even';}
  while (num <= mx){
    console.log(num + oae);
    num = num+ 1;
    }
}

challengeBanner(5);
function challenge5(mx){
  let num = 1;
  let r = nun % 2;
  while (num <= mx){
    if(r === 0){console.log(num);}
    num = num+ 1;
  }
}

challengeBanner(6);
function challenge6(){
  let num = 10;
  while (num > 0){
    console.log(num);
    num = num - 1;
  }
}

challengeBanner(7);
function challenge7(){
  let num = 10;
  while (num > 0){
    console.log(num);
    num = num - 1;
  }
  console.log('Blast off!')
} 

challengeBanner(8);
function challenge8(mx){
  let num = mx;
  while (num > 1){
    console.log(num);
    num = num - 3;
  }
}

challengeBanner(9);
function challenge9(){
  let num = 7;
  while (num > 0){
    console.log(num+ '. Hello!');
    num = num - 1;
  }
}


challengeBanner(10);
function challenge10(str){
  let num = 7;
  while (num > 0){
    console.log(num+ '. ' + str);
    num = num - 1;
    }
}

challengeBanner(11);
function challenge11(str,mx){
  let num = mx;
  while (num > 0){
    console.log(str);
    num = num - 1;
    }
}

challengeBanner(12);
function challenge12(str){
  let mx = str.length();
  let num = 0;
  while (num <= mx){
    console.log(str[num]);
    num = num+ 1;
  }
}

challengeBanner(13);
function challenge13(str){
  let mx = str.length();
  let num = 1;
  while (num <= mx){
    console.log(str[num]);
    num = num + 2;
  }
}

challengeBanner(14);
function challenge14(str){
  let mx = str.length();
  let num = mx;
  while (num >= 0){
    console.log(str[num]);
    num = num - 1;
  }
}

challengeBanner(15);
function challenge15(mx){
  let num = 1;
  while (num <= mx){
    let message = '';
    if((num % 3) === 0){message = message + 'Fizz';}
    if((num % 5) === 0){message = message + 'Buzz';}
    if(message !==''){message = message + num}
    console.log(message);
    num = num + 1;
  }
}

challengeBanner(16);
function challenge16(mx){
  let num = 1;
  let fib0 = 0;
  let fib1 = 1;
  let fib2 = 0;
  while(num <= mx){
    fib2 = fib1 + fib0;
    console.log(fib1);
    num = num + 1;
    fib0 = fib1;
    fib1 = fib2;

  }
}