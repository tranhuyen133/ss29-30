var number=parseInt(prompt("Nhập số nguyên dương bất kì:"));
        var sum=0;
        for (var i = 1; i < number; i++) {
            if (i%2==1) {
                sum+=i;
            }
            if (i===(number-1)&&sum%2==0) {
                sum=sum-i+1;
            }
        }
        console.log(sum);