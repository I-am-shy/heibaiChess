
// 定义 ：-1 黑 ，1 白 ，0 空
class Qi{
    color;//棋子的颜色
    direction = [0,0,0,0,0,0,0,0];//记录8个方向能翻的棋子数
    constructor(number,x,y){
        this.x = x;//纵坐标
        this.y = y;//横坐标
        this.value = number;
        switch (this.value) {
            case -1:
                this.color = "black";
                break;
            case 1:
                this.color = "white"
                break;
            default:
                this.color = "transparent"
                break;
        }
    }
    setValue(number){
        this.value = number;
        switch (this.value) {
            case -1:
                this.color = "black";
                break;
            case 1:
                this.color = "white"
                break;
            default:
                this.color = "transparent"
                break;
        }
    }
    // 判定棋子位置合法性
    // 1.不能下在有子的地方
    // 2.不能下在棋盘外
    // 3.下的棋子要能翻对方的棋子
    isTrue(arr){// 参数：当前棋盘 ；返回布尔值
        if(arr[this.x][this.y] == 1 || arr[this.x][this.y] == -1){
            return false;// 当前位置有子
        }
        // 循环8个方向
        for(let i = 0;i<this.direction.length;i++){
                if(i == 0){
                     // 方向1---左上
                    for(let j = this.x ,k = this.y;j>=0 && k>=0;j--,k--){
                        if(arr[j][k]==this.value){// 同色的棋子，返回位置
                            for(;k<this.y;k++,j++){// 循环到同色棋子的位置并记录异色棋子数
                                if(arr[j][k]==0){// 中间存在空格，无法翻子 
                                    this.direction[i]=0;// 将记录的子清空
                                    break;
                                }
                                else if(arr[j][k]+this.value == 0){
                                    this.direction[i]++;//记录此方向能翻子的数量
                                }   
                            }
                            break;
                        }
                    }
                }
                if(i == 1){
                    // 方向2---上
                    for(let j = this.x, k = this.y;j>=0;j--){
                        if(arr[j][k]==this.value){// 同色的棋子，返回位置
                            for(;j<this.x;j++){// 循环到同色棋子的位置并记录异色棋子数
                                console.log(this)
                                if(arr[j][k]==0){// 中间存在空格，无法翻子
                                    this.direction[i]=0;// 将记录的子清空
                                    break;
                                }
                                else if(arr[j][k]+this.value == 0){
                                    this.direction[i]++;//记录此方向能翻子的数量
                                }   
                            }
                            break;
                        }
                    }
                }
                if(i == 2){
                    // 方向3---右上
                    for(let j = this.x ,k = this.y;j>=0 && k<8;j--,k++){
                        if(arr[j][k]==this.value){// 同色的棋子，返回位置
                            for(;k>this.y;j++,k--){// 循环到同色棋子的位置并记录异色棋子数
                                if(arr[j][k]==0){// 中间存在空格，无法翻子
                                    this.direction[i]=0;// 将记录的子清空
                                    break;
                                }
                                else if(arr[j][k]+this.value == 0){
                                    this.direction[i]++;//记录此方向能翻子的数量
                                }   
                            }
                            break;
                        }
                    }
                }
                if(i == 3){
                    // 方向4---右
                        for(let j = this.x ,k = this.y;k<8;k++){
                            if(arr[j][k]==this.value){// 同色的棋子，返回位置
                                for(;k>this.y;k--){// 循环到同色棋子的位置并记录异色棋子数
                                    if(arr[j][k]==0){// 中间存在空格，无法翻子
                                        this.direction[i]=0;// 将记录的子清空
                                    }
                                    else if(arr[j][k]+this.value == 0){
                                        this.direction[i]++;//记录此方向能翻子的数量
                                    }   
                                }
                                break;
                            }
                        }
                }
                if(i == 4){
                     // 方向5---右下
                    for(let j = this.x ,k = this.y;j<8 && k<8;j++,k++){
                        if(arr[j][k]==this.value){// 同色的棋子，返回位置
                            for(;k>this.y;j--,k--){// 循环到同色棋子的位置并记录异色棋子数
                                if(arr[j][k]==0){// 中间存在空格，无法翻子
                                    this.direction[i]=0;// 将记录的子清空
                                    break;
                                }
                                else if(arr[j][k]+this.value == 0){
                                    this.direction[i]++;//记录此方向能翻子的数量
                                }   
                            }
                            break;
                        }
                    }
                }
                if(i == 5){
                     // 方向6---下
                    for(let j = this.x, k = this.y;j<8;j++){
                        if(arr[j][k]==this.value){// 同色的棋子，返回位置
                            for(;j>this.x;j--){// 循环到同色棋子的位置并记录异色棋子数
                                if(arr[j][k]==0){// 中间存在空格，无法翻子
                                    this.direction[i]=0;// 将记录的子清空
                                    break;
                                }
                                if(arr[j][k]+this.value == 0){
                                    this.direction[i]++;//记录此方向能翻子的数量
                                }   
                            }
                            break;
                        }
                    }
                }
                if(i == 6){
                    // 方向7---左下
                    for(let j = this.x ,k = this.y;j<8 && k>=0;j++,k--){
                        if(arr[j][k]==this.value){// 同色的棋子，返回位置
                            for(;k<this.y;j--,k++){// 循环到同色棋子的位置并记录异色棋子数
                                if(arr[j][k]==0){// 中间存在空格，无法翻子
                                    this.direction[i]=0;// 将记录的子清空
                                    break;
                                }
                                else if(arr[j][k]+this.value == 0){
                                    this.direction[i]++;//记录此方向能翻子的数量
                                }   
                            }
                            break;
                        }
                    }
                }
                if(i == 7){
                     // 方向8---左
                    for(let j = this.x ,k = this.y;k>=0;k--){
                        
                        if(arr[j][k]==this.value){// 同色的棋子，返回位置
                            for(;k<this.y;k++){// 循环到同色棋子的位置并记录异色棋子数
                                if(arr[j][k]==0){// 中间存在空格，无法翻子
                                    this.direction[i]=0;// 将记录的子清空
                                    break;
                                }
                                else if(arr[j][k]+this.value == 0){
                                    this.direction[i]++;//记录此方向能翻子的数量
                                }   
                            }
                            break;
                        }
                    }
                }
        }
        // 判定有无翻子
        for(let i = 0;i<this.direction.length;i++){
            if(this.direction[i]!=0){ // 有不为0的方向则有翻子行为
                return true;
            }
        }
        return false;
    }
    // 反转棋子(循环)
    flip(arr,b){// 参数：当前棋盘 ；返回棋盘
        if(b){
            // console.log(arr);
            for(let i = 0;i<this.direction.length;i++){// 循环8个方向
                if(this.direction[i]!=0){
                    switch (i) {
                        case 0:
                            // 方向1---左上                        
                            for(let j = this.direction[i],x=this.x-1,y=this.y-1;j>0;j--,x--,y--){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }                      
                            break;
                        case 1:
                            // 方向2---上
                            for(let j = this.direction[i],x=this.x-1,y=this.y;j>0;j--,x--){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }   
                            break; 
                        case 2:
                            // 方向3---右上
                            for(let j = this.direction[i],x=this.x-1,y=this.y+1;j>0;j--,x--,y++){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }  
                            break; 
                        case 3:
                            // 方向4---右
                            for(let j = this.direction[i],x=this.x,y=this.y+1;j>0;j--,y++){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }  
                            break;
                        case 4:
                            // 方向5---右下
                            for(let j = this.direction[i],x=this.x+1,y=this.y+1;j>0;j--,x++,y++){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }  
                            break; 
                        case 5:
                            // 方向6---下
                            for(let j = this.direction[i],x=this.x+1,y=this.y;j>0;j--,x++){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }  
                            break; 
                        case 6:
                            // 方向7---左下
                            for(let j = this.direction[i],x=this.x+1,y=this.y-1;j>0;j--,x++,y--){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }
                            break;  
                        case 7:
                            // 方向8---左
                            for(let j = this.direction[i],x=this.x,y=this.y-1;j>0;j--,y--){
                                arr[x][y] = -arr[x][y]; // 翻转棋子
                                Qi_arr[x][y].setValue(arr[x][y]);// 传值给棋子对象
                            }  
                            break;
                        default:
                            break;
                    }   
                }
            }
        }else {
            console.log("非法操作");
        } 
        return arr;
    }
    // 下棋子
    take(player){// 参数：黑方/白方 
        if(this.isTrue(QP_arr)){
            if(player == 1){
                this.value = 1;
                this.color = "white"
                QP_arr[this.x][this.y] = 1;
                this.draw(QP_arr);
                this.draw(this.flip(QP_arr,true));
            }else if(player == -1){
                this.value = -1;
                this.color = "black"
                QP_arr[this.x][this.y] = -1;
                this.draw(QP_arr);
                this.draw(this.flip(QP_arr,true));
            }  
            // console.log(QP_arr);
            return true;//成功下子
        }else{
            console.log("error");
            return false;
        }       
    }
    // 渲染棋子
    draw(arr){// 参数：当前棋盘
        //清空棋子
        let oldQi = document.querySelectorAll(".qi");
        for(let i = 0;i<oldQi.length;i++){
        // console.log( oldQi[i])
        oldQi[i].remove();
        }
        for(let i = 0;i<arr.length;i++){
            for(let j = 0;j<arr[i].length;j++){
                if(arr[i][j] != 0){
                    let q = document.createElement("div");
                    q.classList.add("qi");
                    q.style.backgroundColor = Qi_arr[i][j].color;
                    QG_arr[i][j].appendChild(q);
                }
            }
        }
    }
};

// 初始棋盘数组8*8
let QP_arr = new Array();
let QG_arr = [];// 棋格
// 2维数组赋值
for(let i = 0;i<8;i++){
    QP_arr[i] = [];
    for(let j = 0;j<8;j++){
        if(i==3&&j==3){
            QP_arr[i][j]= 1;
        }else if(i==4&&j==4){
            QP_arr[i][j]= 1;
        }else if(i==3&&j==4){
            QP_arr[i][j]= -1;
        }else if(i==4&&j==3){
            QP_arr[i][j]= -1;
        }else QP_arr[i][j]= 0;
    }
}
// console.log(QP_arr);
// 棋子集合
let Qi_arr = new Array();
for(let i = 0;i<QP_arr.length;i++){
    Qi_arr[i] = [];
    for(let j = 0;j<QP_arr.length;j++){
        let qi = new Qi(QP_arr[i][j],i,j);//创建棋子对象
        Qi_arr[i][j] = qi;//将棋子放入到集合中
    }
}
// 渲染棋盘
let drawQP = function (arr) { 
        let container = document.getElementsByClassName("container")[0];
        for(let i = 0;i<arr.length;i++){
            let row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("flexCenter");
            QG_arr[i]=[];
            for(let j = 0;j<arr.length;j++){
                let box = document.createElement("div");
                box.classList.add("box");
                row.appendChild(box);
                QG_arr[i][j] = box;
                if(arr[i][j] != 0){
                    let q = document.createElement("div");
                    q.classList.add("qi");
                    q.style.backgroundColor = Qi_arr[i][j].color;
                    QG_arr[i][j].appendChild(q);
                }
            }
            container.appendChild(row);
        }
}
drawQP(QP_arr);





