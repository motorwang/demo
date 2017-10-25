##js原生的ajax请求
    // 1. 创建对象
    var xhr = new XMLHttpRequest();

    //打开连接
    xhr.open('get', 'url');

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
        }
    }

    // 发送
    xhr.send();


## jquery中的ajax()请求
    $.ajax(
        url: '',
        type: '',
        data: {  },
        success: function (data) {
            console.log(data);
        }
    );
####注意:
    jquery的ajax请求默认是异步(async)的. -> async: true