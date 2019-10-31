import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const root=[
    {
        name:"首页",
        path:'/admin/home',
        key:'/admin/home'
    },
    {
        name:"用户管理",
        path:'/admin/user',
        key:'/admin/user',
        children:[
            {
                name:"权限管理",
                path:'/admin/user/root',
                key:'/admin/user/root',
            },
            {
                name:"信息管理",
                path:'/admin/user/info',
                key:'/admin/user/info',
                children:[
                    {
                        name:"个人管理",
                        path:'/admin/user/root/sing',
                        key:'/admin/user/root/sing',
                    }
                ]
            },

        ]
    },
    {
        name:"设置",
        path:'/admin/set',
        key:'/admin/set'
    }
];
class CustomSlider extends React.Component{
    jump=(path)=>{
        this.props.history.push(path)
    };
    renderItem(data){
        return data.map((item,index)=>{
            if(item.children){
                return(
               <SubMenu title={item.name} key={index}>
                   {this.renderItem(item.children)}
                </SubMenu>
                )
            }else {
                return( <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item> )
            }
        })
    }
    render(){
        return(
            <Menu style={{ width: 200 }} mode="vertical" theme='dark'>
                {this.renderItem(root)}
            </Menu>
        )
    }
}
export default withRouter(CustomSlider)