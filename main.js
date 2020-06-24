function challenge1(){
  let num = 1;
  while (num <= 5){
    console.log(num);
    num = num + 1;
  }
}

function challenge2(mx){
  let num = 1;
  while (num <= mx){
    console.log(num);
    num = num+ 1;
  }
}

function challenge3(mn, mx){
  let num = mn;
  while (num <= mx){
    console.log(num);
    num = num+ 1;
    }
}

function challenge4(mx){
  let num = 1;
  let r = num % 2;
  let oae = '';
  if (r = 1){oae =' Odd';}
  else{oae = ' Even';}
  let num = 1;
  while (num <= mx){
    console.log(num + oae);
    num = num+ 1;
    }
}

function challenge5(mx){
  let num = 1;
  let r = nun % 2;
  while (num <= mx){
    if(r === 0){console.log(num);}
    num = num+ 1;
  }
}

function challenge6(){
  let num = 10;
  while (num > 0){
    console.log(num);
    num = num - 1;
  }
}

function challenge7(){
  let num = 10;
  while (num > 0){
    console.log(num);
    num = num - 1;
  }
  console.log('Blast off!')
} 

function challenge8(mx){
  let num = mx;
  while (num > 1){
    console.log(num);
    num = num - 3;
  }
}

function challenge9(){
  let num = 7;
  while (num > 0){
    console.log(num+ '. Hello!');
    num = num - 1;
  }
}

function challenge10(str){
  let num = 7;
  while (num > 0){
    console.log(num+ '. ' + str);
    num = num - 1;
    }
}

function challenge11(str,mx){
  let num = mx;
  while (num > 0){
    console.log(str);
    num = num - 1;
    }
}

function challenge12(str){
  let mx = str.length();
  let num = 0;
  while (num <= mx){
    console.log(str[num]);
    num = num+ 1;
  }
}

function challenge13(str){
  let mx = str.length();
  let num = 1;
  while (num <= mx){
    console.log(str[num]);
    num = num + 2;
  }
}

function challenge14(str){
  let mx = str.length();
  let num = mx;
  while (num >= 0){
    console.log(str[num]);
    num = num - 1;
  }
}

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

function challenge16(mx){
  let num = 1;
  let fib1 = 1;
  let fib0 = 0;
  while(num <= mx){
    fib1 = fib1 + fib0;
    console.log(fib1);
    fib
    num = num + 1
  }
}