import React from "react";
import "./custom-bootstrap.scss";
import { Col, Container, Image, Row } from "react-bootstrap";

import logo_000 from "./logo_000.png";

export const App: React.FunctionComponent = () => {
  const [height, updateHeight] = React.useState<"100vh" | "50vh" | undefined>(
    "100vh"
  );

  React.useEffect(() => {
    updateHeight(window.innerWidth > 767 ? "100vh" : "50vh");
    window.addEventListener("resize", () => {
      updateHeight(window.innerWidth > 767 ? "100vh" : "50vh");
    });
  }, []);

  return (
    <>
      <div style={{ fontFamily: "Sawarabi Gothic", fontWeight: "lighter" }}>
        {/* <Navbar bg="dark">
        <Navbar.Brand href="/">
          <img src={logo_fff} height="30" />
        </Navbar.Brand>
      </Navbar> */}
        <Container fluid>
          <Row>
            <Col md={6} style={{ background: "white" }}>
              <a href="/">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: height }}
                >
                  <Image src={logo_000} fluid />
                </div>
              </a>
            </Col>
            <Col md={6} style={{ background: "black" }}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: height, color: "white" }}
              >
                <Row style={{ width: "100%" }}>
                  <Col md={1}></Col>
                  <Col md={10}>
                    <div className="d-flex justify-content-center">
                      <div>
                        <div
                          style={{
                            borderBottom: "gray 1px solid",
                            marginBottom: 16,
                          }}
                        >
                          <div
                            className="text-center"
                            style={{ marginBottom: 16 }}
                          >
                            <h1>kkbys</h1>
                          </div>
                          <p>
                            北海道出身・愛知県在住の学生。二級知的財産管理技能士。
                          </p>
                          <p>何かを作ること全般 (創造・構築) が好き。</p>
                          <p>
                            自動化できる作業はなるべく自動化して幸せになりたい人間。
                          </p>
                          <p>
                            最近は C++ とか Python、TypeScript
                            を使う機会が多いかも。
                            <br />
                            エディタは VSCode または Vim を使用。
                          </p>
                          <p>
                            趣味は映画館で映画を観たり、電車で遠出したりすること等。
                          </p>
                        </div>
                        <div className="text-center">
                          <span>GitHub: </span>
                          <a href="https://github.com/kkbys">
                            https://github.com/kkbys
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={1}></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
