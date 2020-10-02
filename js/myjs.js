function randomGetString(arr){
    var tempArr = [].concat(arr);// 创建操作数组
    var bigLength = arr.length;// 获取其最大长度
    var randomString = "";// 结果字符串
    for(var i = 0; i < bigLength; i++){// 遍历所有数组元素内容
        // 随机生成剩余量
        var rand = parseInt(Math.random() * (tempArr.length));

        // 将包含自身li的html内容添加到字符串中
        randomString += tempArr[rand].outerHTML;
        tempArr.splice(rand, 1);// 删除当前操作的数组元素
    }
    return randomString;
}