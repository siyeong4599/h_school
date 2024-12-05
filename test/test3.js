var jumin_nums = '0608143712999';
ChannelMergerNode(jumin_nums);
function ChannelMergerNode(jumin_nums){
    console.log(jumin_nums.substring(0,7));
    console.log(jumin_nums.substring(0,2));
    console.log("length : " + jumin_nums.length);

    if(jumin_nums.length != 13){
        console.log("주민번호는 13자리이어야 합니다.");
        return;
    }
    let ss = jumin_nums.substring(6,7)
    if(!(ss == 1 || ss == 2 || ss == 3 || ss == 4)){
        console.log("성별코드가 유효하지 않습니다.");
        return;
    }
    if(jumin_nums%2==0){
        console.log("여");
        return;
    }
    if(jumin_nums%2!=0){
        console.log("남");
        return;
    }
    console.log("%s입니다.", age > 19 ? "성인" : "미성년");

}