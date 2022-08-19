import React from "react";
import Header from "./Header";

const Reserve = () => {
  return (
    <>
      <Header />
      <body>
        <div style={{display:"flex", alignItems:"center",justifyContent:"center", height:"150px"}}>
          <button>이전</button>
          <span style={{fontSize:"32px", fontWeight:"bold"}}>그러하다 스튜디오 연남</span>
        </div>

        <div style={{height:"500px", display:"flex", justifyContent:"center", marginBottom:"20px"}}>
            <img src="./img/201.png" style={{height:"100%", padding:"10px"}}/>
            <div style={{height:"500px"}}>
              <div style={{display:"flex", height:"50%", margin:"5px"}}>
                <img src="./img/202.png" style={{height:"100%", padding:"5px"}}/>
                <img src="./img/203.png" style={{height:"100%", padding:"5px"}}/>
              </div>
              <div style={{display:"flex", height:"50%", margin:"5px"}}>
                <img src="./img/204.png" style={{height:"100%", padding:"5px"}}/>  
                <img src="./img/205.png" style={{height:"100%", padding:"5px"}}/>
              </div> 
            </div>       
        </div>
        <div style={{display:"flex", border:"solid", height:"500px"}}>
          <div style={{border:"solid", width:"60%", height:"100%", padding:"30px"}}>
            <div>
              연남에 위치한 '그러하다 스튜디오 연남'
            </div>
            <span>
              스냅촬영
            </span>
            <span>
              홍대입구역 도보 10분
            </span>
            <div>
              개인촬영 모델촬영 가족여행 우정여행 데이트스냅등 컨셉 촬영 전문 포토그래퍼입니다
            </div>
            <div style={{backgroundColor:"#E7E7E4",height:"70px", width:"70%", display:"flex", justifyContent:"space-around"}}>
              <div>예약횟수</div>
              <div>평점</div>
              <div>인스타그램</div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"40%"}}>
              <div>정보</div>
              <div>리뷰</div>
              <div>질문답변</div>
              <div>
                직원수 1명
                
              </div>
            </div>
          </div>
          <div style={{border:"solid", width:"40%", height:"100%"}}></div>
        </div>
      </body>
    </>
  );
};

export default Reserve;
