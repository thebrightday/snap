import React from "react";
import Header from "./Header";

function Landing() {
  return (
    <>
      <Header />
      <body>
        <div
          style={{
            textAlign: "center",
            paddingTop: "15vh",
            paddingBottom: "15vh",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          어떤 사진을 찍으실 건가요?
        </div>
        <container
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/1.png" style={{ width: "100%", height: "90%" }} />
              <div>개인사진</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/2.png" style={{ width: "100%", height: "90%" }} />
              <div>개인프로필(스튜디오)</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/3.png" style={{ width: "100%", height: "90%" }} />
              <div>개인프로필(야외)</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/4.png" style={{ width: "100%", height: "90%" }} />
              <div>가족사진</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/5.png" style={{ width: "100%", height: "90%" }} />
              <div>아이사진</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/6.png" style={{ width: "100%", height: "90%" }} />
              <div>커플사진</div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/7.png" style={{ width: "100%", height: "90%" }} />
              <div>우정사진</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/8.png" style={{ width: "100%", height: "90%" }} />
              <div>행사사진</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/9.png" style={{ width: "100%", height: "90%" }} />
              <div>반려동물사진</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/10.png" style={{ width: "100%", height: "90%" }} />
              <div>기업/상업적 촬영</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/11.png" style={{ width: "100%", height: "90%" }} />
              <div>음식촬영</div>
            </div>

            <div style={{ width: "10%", margin: "10px", textAlign: "center" }}>
              <img src="img/12.png" style={{ width: "100%", height: "90%" }} />
              <div>영상</div>
            </div>
          </div>
        </container>
      </body>
    </>
  );
}

export default Landing;
