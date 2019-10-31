import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

class Header extends React.Component{
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="mail" />
                    Navigation One
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        这是顶部导航栏
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}
export default withRouter(Header)