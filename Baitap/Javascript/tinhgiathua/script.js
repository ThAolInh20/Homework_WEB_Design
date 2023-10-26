function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * tinhGiaiThua(n - 1);
    }
}
function functionMath(x){
            var n=document.getElementById("dienso").value;
            if(n-parseInt(n)!=0){
                    alert("dien so nguyen")
            }
            else{
                n=tinhGiaiThua(n);
            document.getElementById("ketqua").value=n;
            }
           
}