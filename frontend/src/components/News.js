import React, { useState, useEffect } from "react";
import { Tab, Tabs, Divider, Grid } from "@mui/material";
import fetchData from "../utils/apiUtils";
import DEFAULT_BACKEND_URL from "../config";

function News() {
  const backendUrl = DEFAULT_BACKEND_URL;
  const [value, setValue] = useState(0);
  const [articles, setArticles] = useState([]);
  const [awards, setAwards] = useState([]);

  // Gửi HTTP request để lấy danh sách bài báo từ backend
  const fetchArticles = () =>
    fetchData(`${backendUrl}/api/articles/`, setArticles);

  // Sử dụng useEffect để tự động gọi hàm fetchArticles khi component được tạo
  useEffect(() => {
    fetchArticles();
  }, []);

  // Gửi HTTP request để lấy danh sách giải thưởng NCKH từ backend
  const fetchAwards = () =>
    fetchData(`${backendUrl}/api/research-awards/`, setAwards);

  // Sử dụng useEffect để tự động gọi hàm fetchAwards khi component được tạo
  useEffect(() => {
    fetchAwards();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const notifications = [
    {
      date: "2023-10-16",
      title:
        "TEXT 1",
      description: "text 1",
      link: "#",
    },
    {
      date: "2023-09-25",
      title:
        "Thông báo v/v đăng ký thi kiểm tra trình độ tiếng Anh đầu ra đợt tháng 11/2023",
      description: "Sinh viên xem thông báo chi tiết vui lòng click xem ",
      link: "#",
    },
    {
      date: "2023-09-22",
      title: "Thông báo hủy lớp Kỹ năng Giao tiếp Tiếng Anh 1",
      description: "",
      link: "#",
    },
    {
      date: "2023-09-20",
      title: "Thông báo V/v Đăng ký cấp chứng chỉ Giáo dục Quốc phòng - An ninh",
      description: "Thông báo V/v Đăng ký cấp chứng chỉ Giáo dục Quốc phòng - An ninh",
      link: "#",
    },
  ];

  const TabPanel = ({ value, index, children }) => {
    return value === index ? <div>{children}</div> : null;
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="action tabs example"
      >
        <Tab label="Thông Báo Chung" />
      </Tabs>
      <div className="notification-container">
        {notifications?.slice(0, 10).map((notification, index) => (
          <div key={index}>
            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <div className="notification-date">
                    <p
                      style={{
                        border: "1px solid blue",
                        fontSize: "20px",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span className="caltop" style={{ color: "red" }}>
                        {notification.date.split("-")[2]}
                      </span>
                      <Divider
                        style={{ margin: "5px 0", backgroundColor: "blue" }}
                      />
                      <span className="calbot">{`${
                        notification.date.split("-")[1]
                      }/${notification.date.split("-")[0]}`}</span>
                    </p>
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <div className="notification-header">
                    <h3 style={{ color: "#3f51b5", marginBottom: "5px" }}>
                      {notification.title}
                    </h3>
                  </div>
                  <p
                    className="notification-description"
                    style={{ marginBottom: "5px" }}
                  >
                    {notification.description}
                  </p>
                  <a
                    className="notification-link"
                    href={notification.link}
                    style={{ color: "red", textDecoration: "none" }}
                  >
                    Click here
                  </a>
                </Grid>
              </Grid>
              <Divider style={{ margin: "5px 0" }} />
            </TabPanel>
            {index !== notifications.length - 1}
          </div>
        ))}
        
        <div style={{ textAlign: "right" }}>
          <a
            href="/link-to-more"
            style={{
              color: "red",
              fontSize: "20px",
              fontWeight: "500",
              textDecoration: "none",
            }}
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
