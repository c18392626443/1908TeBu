
class Menu{
    constructor(title,clsname,url,subBoxCls){
        this.title = title;//菜单的文本
        this.clsname = clsname;//菜单的class。
        this.url = url;//菜单对应的页面
        this.subBoxCls = subBoxCls;//孩子容器的样式
        this.children = [];//子菜单。
    }

    //方法(添加孩子)
    appendChild(menuObj){
        this.children.push(menuObj);
    }

    //创建html标签
    render(ulDom){
        //1、创建li
        let  liDom  = document.createElement("li");
        liDom.className = this.clsname;
        ulDom.append(liDom);
        //2、创建a
        let aDom = document.createElement("a");
        aDom.innerHTML = this.title;
        aDom.href= this.url;
        liDom.append(aDom);

        //3、如果有孩子，创建ul
        if(this.children.length>0){
            let boxDom = document.createElement("ul");
            boxDom.className = this.subBoxCls;
            liDom.append(boxDom);
            //循环每个孩子，让孩子创建自己
            for(let i=0;i<this.children.length;i++){
                this.children[i].render(boxDom);
            }
        }
    }
}

//菜单管理类（你可以认为是根菜单）
class MenuManager{
    constructor(boxDom){ //
        this.boxDom = boxDom;
        this.children=[];
    }

    appendChild(menuObj){
        this.children.push(menuObj);
    }

    render(){
        for(let i in this.children){
            this.children[i].render(this.boxDom);
        }
    }
}
var menuObj = {
    data: {
        ulClass: "one",
        children: [
            {
                "className": "oneli",
                "title": "全部商品分类",
                "href": "#",
                "ulClass": "two",
                "children": [
                    {
                        "className": "twoli",
                        "title": '男鞋',
                        "href": "#",
                        "ulClass": "three",
                        children: [
                            {
                                "className": "threeli",
                                "title": '棉鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []
                            },
                            {
                                "className": "threeli",
                                "title": '跑步鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '综训鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '休闲鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '板鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '篮球鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '帆布鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            
                            {
                                "className": "threeli",
                                "title": '户外鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            }
                        ]
                    },
                    {
                        "className": "twoli",
                        "title": '女鞋',
                        "href": "#",
                        "ulClass": "three",
                        children: [
                            {
                                "className": "threeli",
                                "title": '棉鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []
                            },
                            {
                                "className": "threeli",
                                "title": '跑步鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '休闲鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '板鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '综训鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '帆布鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '户外鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            }
                            
                        ]
                    },
                    {
                        "className": "twoli",
                        "title": '女装',
                        "href": "#",
                        "ulClass": "three",
                        children: [
                            {
                                "className": "threeli",
                                "title": '羽绒服',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []
                            },
                            {
                                "className": "threeli",
                                "title": '棉服',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '运动T恤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '休闲T恤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '短裤针织衫/卫衣/长T',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '长裤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '风衣夹克',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '紧身裤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '运动套装',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            }
                        ]
                    },
                    {
                        "className": "twoli",
                        "title": '男装',
                        "href": "#",
                        "ulClass": "three",
                        children: [
                            {
                                "className": "threeli",
                                "title": '羽绒服',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []
                            },
                            {
                                "className": "threeli",
                                "title": '棉服',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '运动T恤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '休闲T恤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '短裤针织衫/卫衣/长T',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '长裤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '风衣夹克',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '紧身裤',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '运动套装',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            }
                        ]
                    },
                    {
                        "className": "twoli",
                        "title": '童鞋',
                        "href": "#",
                        "ulClass": "three",
                        children: [
                            {
                                "className": "threeli",
                                "title": '棉鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []
                            },
                            {
                                "className": "threeli",
                                "title": '跑步鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '休闲鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '板鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            },
                            {
                                "className": "threeli",
                                "title": '凉鞋',
                                "href": "http://www.baidu.com",
                                "ulClass": "",
                                children: []  
                            }
                        ]
                    },
                    {
                        "className": "twoli",
                        "title": '童装',
                        "href": "#",
                        "ulClass": "three",
                        children:[]
                    }
                ]
            },  
        ]
    }
}

//根据菜单项目创建菜单
function createMenu(parentMenu, obj) {
    let menuObj = new Menu(obj.title, obj.className, obj.href, obj.ulClass);
    parentMenu.appendChild(menuObj);
    //创建它的孩子
    if (obj.children) {
        for (let i in obj.children) {
            createMenu(menuObj, obj.children[i]);
        }
    }
}

window.onload = function () {
    //菜单管理类（）
    let rootMenu = new MenuManager($("#box"));
    for (let i in menuObj.data.children) {
        createMenu(rootMenu, menuObj.data.children[i]);
    }
    //二、创建dom
    rootMenu.render();
}
// function $(str) {
//     if (str.charAt(0) == "#") {
//         return document.getElementById(str.substring(1));
//     } else if (str.charAt(0) == ".") {
//         return document.getElementsByClassName(str.substring(1));
//     } else {
//         return document.getElementsByTagName(str);
//     }
// }

// 固定导航栏

    $(function(){
        window.onscroll = function(){
            var _top = document.body.scrollTop || document.documentElement.scrollTop;    
            // console.log(_top);
            if(_top > 130){
                $("#nav").css({
                    position: "fixed",
                    Zindex: "9",
                    top:"0"
                })
            }else{
                $("#nav").css({
                    position: "static"
                }) 
            }    
        }
        
    })

    // window.onscroll = function(){
	// 	//兼容性:获取滚动条距顶端的距离
	// 	var _top = document.body.scrollTop || document.documentElement.scrollTop;
		
	// 	console.log(_top);
	// }
	
	// var btn = document.querySelector("button");
	
	// btn.onclick = function(){
	// 	document.body.scrollTop = document.documentElement.scrollTop = 0;
	// }
