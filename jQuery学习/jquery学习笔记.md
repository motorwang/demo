第一天：
###一、定义
    1、严格的来讲jquery是javascript库,不是js框架
    2、它是轻量级的 “写的少，做的多的js库”;
    3、jquery-1.0版本发行的时间是2006年1月,目前最新的版本是3.2.1

###二、jQuery的功能：
    1、html元素选取；
    2、html元素操作；
    3、html DOM遍历和修改；
    4、html事件操作；
    5、css操作；
    6、js特效和动画效果；
    7、ajax异步请求。
    除此之外，jquery还有很多扩展的插件。

    注意: 
        jQuery2.0版本以后不再支持IE678，如果需要支持IE678，就使用jQuery2.0以下的版本。

###三、jquery兼容问题

    1、兼容IE678的写法 
    <!--[if lt IE 9]>
        <script src="./jquery-1.8.3.js"></script>
    <![endif]-->

    2.IE9以上的写法
    <!--[if gte IE 9]>
        <script src="./jquery-3.2.1.js"></script>
    <![endif]-->

###四、功能:
jquery特点: 链式编程，隐式迭代。
链式编程: 可以对像链条一样编程一直编程下去;但是需要注意的是在什么时候破坏了链式结构. 例如: $('.box').html().text();

    1. 选择器:
        id选择器
        类名选择器
        标签选择器
        属性选择器:  $("input[type=text]").val("jQuery属性选择器");

    2. jQuery事件
        鼠标事件: click, dblclick, mouseenter, mouseleave, hover
        键盘事件: keydown, keypress, keyup
        表单事件:  submit, change, focus, blur
        文档/窗口事件: 

        注意: 输入框一边输入一边校验的事件是 "oninput", 有兼容性, 在jQuery中的写法是:
            $('.input').on("input", function () { // 主流浏览器
                console.log($(this).val());
            });

            $('.input').on('propertychange', function () { // 在IE下, 是 onpropertychange
                console.log($(this).val());
            })

    3.jQuery动画
        1、显示、隐藏、切换
            show() 方法, 显示
            hide() 方法, 隐藏
            toggle() 方法, 切换显示与隐藏
        2、淡入、淡出、切换
            fadeOut() 方法, 淡出(消失)
            fadeIn() 方法, 淡入(显示)
            fadeToggle() 淡出淡出切换
            fadeTo()    变换透明度

        3、滑入、滑出、切换、
            slideDown() 方法, 滑出(消失)
            slideUp() 方法, 滑入(显示)
            slideToggle() 方法, 滑入滑出切换

        4、animate 以及动画停止 stop()
            $('.box4').animate( {width: '200px', height: '200px', top: '200px', left: '200px'}, 'slow');

    4. jQuery 操作dom遍历dom
        1. 增加元素: 
        prepend() 在被选元素内部开头插入内容
        append() 在被选元素内部结尾插入内容
        before() 在被选元素外部开头插入内容
        after() 在被选元素外部结尾插入内容

        2. 删除元素
        remove() 方法   删除被选的元素以及所有的子元素.
        empty() 方法  删除被选元素的所有的子元素.
        

    5. jQuery css类操作
        addClass() 方法 添加类名
        removeClass() 方法 删除类名
        toggleClass() 方法 切换类名

        css()方法




    