import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import user from "../assets/img/user.png";

const CustomSidebar = ({toggle, hadleToggle}) => {

  return (
    <div className="custom side bar">
      <ProSidebar collapsed={toggle} className="sidebar-custom">
        <SidebarHeader>
          <div className="w-100 d-flex  justify-content-center p-3">
            <img src={user} className="klp-symble" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              icon={<i class="fas fa-fw fa-wrench"></i>}
              onClick={() => {}
                // history.push("/dashboard/customer")
            }
            >
              Dashboard
            </MenuItem>
            <SubMenu
              icon={<i class="fas fa-fw fa-briefcase"></i>}
              title="Job pool"
            >
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/invoice")
                 }>
                Job pool
              </MenuItem>
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/purchase")
                }
                 >
                Purchase Vigat
              </MenuItem>
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/assortment")
                 }>
                Assortment
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={() => {}
                // history.push("/dashboard/broker-analysis")
            }
            >
              Briefing Document
            </MenuItem>
            <SubMenu
              icon={<i class="fas fa-fw fa-briefcase"></i>}
              title="Research Method"
            >
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/invoice")
                 }>
                Job pool
              </MenuItem>
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/purchase")
                }
                 >
                Purchase Vigat
              </MenuItem>
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/assortment")
                 }>
                Assortment
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<i class="fas fa-fw fa-briefcase"></i>}
              title="Audits"
            >
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/invoice")
                 }>
                Job pool
              </MenuItem>
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/purchase")
                }
                 >
                Purchase Vigat
              </MenuItem>
              <MenuItem onClick={() =>{}
                //  history.push("/dashboard/assortment")
                 }>
                Assortment
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={() => {}
                // history.push("/dashboard/general-account")
            }
            >
              Users
            </MenuItem>
            {/* <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/lot-sale')}>
            Lot Sale Detail
          </MenuItem> */}
            <MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={() => {}
                // history.push("/dashboard/stock-tracking")
            }
            >
              Brands
            </MenuItem>
            <MenuItem
              icon={<i class="fas fa-fw fa-file-alt"></i>}
              onClick={() =>{}
                //  history.push("/dashboard/report")
                }
            >
              Job Reports
            </MenuItem>
            <MenuItem 
              icon={<i class="fas fa-fw fa-file-alt"></i>}
              onClick={() =>{}
                //  history.push("/dashboard/report")
                }
            >
              Supervisors
            </MenuItem>
            <MenuItem 
              icon={<i class="fas fa-fw fa-file-alt"></i>}
              onClick={() =>{}
                //  history.push("/dashboard/report")
                }
            >
              Sponsers
            </MenuItem>
            {/* <MenuItem icon={<i class="fas fa-fw fa-file-alt"></i>}>
            Report Single
          </MenuItem> */}
            <MenuItem>
              <hr class="sidebar-divider d-none d-md-block"></hr>
            </MenuItem>
            {/* <MenuItem> */}
            <div class="text-center d-none d-md-block">
              <div
                className="rounded-circle border-0 sidebar-toggle"
                onClick={hadleToggle}
              >
                {toggle ? (
                  <i class="fa-solid fa-angle-right"></i>
                ) : (
                  <i class="fa-solid fa-angle-left"></i>
                )}
              </div>
            </div>
            {/* </MenuItem> */}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default CustomSidebar;
