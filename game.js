
// 玩家p1，p2 行动替换
let player = 1;// 默认白棋
let p1 = document.getElementsByClassName("p1")[0];
let p2 = document.getElementsByClassName("p2")[0];
function change(player){//更换玩家
    if(player == 1){
        p1.classList.add("active");
        p2.classList.remove("active");
    }else{
        p2.classList.add("active");
        p1.classList.remove("active");
    }
}
change(player);
// 游戏判定,绑定事件
for(let i = 0;i<QG_arr.length;i++){
    for(let j = 0;j<QG_arr[i].length;j++){
        // console.log(QG_arr[i][j]);
        QG_arr[i][j].onclick = function (e) {
            // console.log(e);
            // console.log(Qi_arr[i][j])
            if(player == 1){
                Qi_arr[i][j].value = 1;
            }else if(player == -1){
                Qi_arr[i][j].value = -1;
            }
            let result = Qi_arr[i][j].take(player);
            if(result){//成功下子
                player = -player;// 更换棋子
                change(player);
            }
            // console.log(player);
        }
    }
}
// 游戏胜负的判定
// console.log(QG_arr)
// console.log(QP_arr)
// console.log(Qi_arr)