import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import "../assets/css/Header.css";
import Account from "../components/Account";
import Banner from "./Banner";

function Header() {
  const userData = useSelector((state) => state.user.userData);
  const [menuAnchors, setMenuAnchors] = useState({
    menu1Anchor: null,
    menu2Anchor: null,
    menu3Anchor: null,
    menu4Anchor: null, // Added menu4
  });

  const handleMenuOpen = (menu) => (event) => {
    setMenuAnchors({ ...menuAnchors, [menu]: event.currentTarget });
  };

  const handleMenuClose = (menu) => () => {
    setMenuAnchors({ ...menuAnchors, [menu]: null });
  };

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <MenuItem
        key={item.to}
        component={Link}
        to={item.to}
        onClick={handleMenuClose(item.menu)}
      >
        {item.label}
      </MenuItem>
    ));
  };

  const menu1Items = [
    { to: "/research-activities/registration", label: "Research activities registration" },//Đăng ký hoạt động
    { to: "/research-activities/registrated", label: "Registrated research activities" }, //Hoạt động đã đăng ký
    { to: "/ai-tool", label: "Tool" }, //Công cụ hỗ trợ
  ];

  const menu2Items = [
    { to: "/researchs", label: "Researchs" },//Công trình công bố
    { to: "/articles", label: "Article" },//Bài báo khoa học
    { to: "/transfers", label: "Transfer" },//Chuyển giao công nghệ
    { to: "/books", label: "Books" },//Sách do NXB phát hành
    { to: "/awards", label: "Awards" },//Giải thưởng NCKH
  ];

  const menu3Items = [
    { to: "/manual", label: "Manual" },//Hướng dẫn sử dụng
    { to: "/regulations", label: "Regulations" },//Quy định
  ];

  const menu4Items = [
    { to: "/research-activities", label: "Manage research activities" },//Quản lý hoạt động NCKH
    {
      to: "/research-activities/registration/approve",
      label: "Approve registration",//Phê duyệt đăng ký
    },
    {
      to: "/research-activities/declare/approve",
      label: "Approve declare",//Phê duyệt minh chứng
    },
    { to: "/reports", label: "Reports" },//Báo cáo tổng hợp
  ];

  return (
    <div>
      <Banner />
      <AppBar
        position="static"
        className="header-container"
        sx={{
          backgroundColor: "#4056A2",
        }}
      >
        <Toolbar>
          <div className="header-navigation">
            {/* Trang chủ */}
            <Button
              color="inherit"
              component={Link}
              to="/dashboard"
              className="header-button"
            >
              Main
            </Button>

            {/* Giới thiệu */}
            <Button
              color="inherit"
              component={Link}
              to="/about"
              className="header-button"
            >
              Introduction
            </Button>

            {/* Văn bản và quy định */}
            <Button
              color="inherit"
              className="header-button"
              onClick={handleMenuOpen("menu3Anchor")}
            >
              Manual
            </Button>
            <Menu
              anchorEl={menuAnchors.menu3Anchor}
              open={Boolean(menuAnchors.menu3Anchor)}
              onClose={handleMenuClose("menu3Anchor")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {renderMenuItems(menu3Items)}
            </Menu>

            {/* Đề tài nghiên cứu */}
            <Button
              color="inherit"
              className="header-button"
              onClick={handleMenuOpen("menu1Anchor")}
            >
              Topic
            </Button>
            <Menu
              anchorEl={menuAnchors.menu1Anchor}
              open={Boolean(menuAnchors.menu1Anchor)}
              onClose={handleMenuClose("menu1Anchor")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {renderMenuItems(menu1Items)}
            </Menu>

            {/* Hoạt động khoa học */}
            <Button
              color="inherit"
              className="header-button"
              onClick={handleMenuOpen("menu2Anchor")}
            >
              Resource 
            </Button>
            <Menu
              anchorEl={menuAnchors.menu2Anchor}
              open={Boolean(menuAnchors.menu2Anchor)}
              onClose={handleMenuClose("menu2Anchor")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {renderMenuItems(menu2Items)}
            </Menu>

            {/* Phần dành cho người quản lý khoa học*/}
            {userData?.role === "manager" || userData?.role === "admin" ? (
              <>
                <Button
                  color="inherit"
                  component={Link}
                  to="/admin/research-activities-manager"
                  className="header-button"
                >
                  Manage activities
                </Button>

                {/* <Button
                  color="inherit"
                  className="header-button"
                  onClick={handleMenuOpen("menu4Anchor")}
                >
                  Quản lý hoạt động NCKH
                </Button>
                <Menu
                  anchorEl={menuAnchors.menu4Anchor}
                  open={Boolean(menuAnchors.menu4Anchor)}
                  onClose={handleMenuClose("menu4Anchor")}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  {renderMenuItems(menu4Items)}
                </Menu> */}
              </>
            ) : (
              <></>
            )}
          </div>
          <div style={{ flex: 1 }}></div>
          <Account isAuthor={true} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
