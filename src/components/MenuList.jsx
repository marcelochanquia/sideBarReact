
import { Menu } from "antd";
import { BarsOutlined,HomeOutlined, AreaChartOutlined, AppstoreAddOutlined,PayCircleOutlined, SettingOutlined } from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";


export const MenuList = () => {
  return (
    <Menu theme="dark" mode="inline" className="menu-bar">
        <Menu.Item className="home"icon= {<HomeOutlined/>}>
            Home
        </Menu.Item>
        <Menu.Item className="activity"icon= {<AppstoreAddOutlined/>}>
            Activity
        </Menu.Item>
        <Menu.SubMenu key= "tasks" icon= {<BarsOutlined/>} title="Tasks">
            <Menu.Item key="task-1"> Task 1</Menu.Item>
            <Menu.Item key="task-2"> Task 2</Menu.Item>
            <Menu.SubMenu key = "subtask" title= "Subtasks">
                <Menu.Item key="subtask-1"> SubTask 1</Menu.Item>
                <Menu.Item key="subtask-2"> SubTask 2</Menu.Item>
            </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item className="process"icon= {<AreaChartOutlined/>}>
            Process
        </Menu.Item>
        <Menu.Item className="payment"icon= {<PayCircleOutlined/>}>
            Payment
        </Menu.Item>
        <Menu.Item className="settings"icon= {<SettingOutlined/>}>
            Settings
        </Menu.Item>
        
    </Menu>
  )
}
