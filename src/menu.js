import {Icon, Layout, Menu} from "antd";
import React, {Component} from "react";
import {FormattedMessage, IntlProvider} from "react-intl";

const {SubMenu} = Menu;
const {Sider} = Layout;

class Menus extends Component {

    onclick = () => {
        alert("clicked");
    };

    render() {
        /** render方法里面的return只支持一个html元素，里面可以包含多个
         *
         * 这种不支持
         <div className="App">
         </div>
         <div>
         </div>


         */
        return (
            <IntlProvider locale={this.props.appLocale.locale} messages={this.props.appLocale.messages}>
                <Sider width={200} style={{background: '#fff'}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                            <Menu.Item key="1">
                                <FormattedMessage id="app.menu.subnav1" defaultMessage="全流程订单日志"/>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={this.onclick()}>
                                <a href="AntDTest.js">
                                    antd test collection
                                </a></Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </IntlProvider>)
    }
}

export default Menus;
