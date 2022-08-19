import React from "react";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "82px",
        backgroundColor: "#E7E7E4",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 30 }}>SnapStation</span>
        <div
          style={{
            backgroundColor: "white",
            marginLeft: "50px",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3851 12.4457C8.73482 14.5684 4.85538 14.4013 2.3986 11.9445C-0.23744 9.3085 -0.23744 5.03464 2.3986 2.3986C5.03464 -0.23744 9.3085 -0.23744 11.9445 2.3986C14.4013 4.85538 14.5684 8.73481 12.4457 11.3851L17.6014 16.5407C17.8943 16.8336 17.8943 17.3085 17.6014 17.6014C17.3085 17.8943 16.8336 17.8943 16.5407 17.6014L11.3851 12.4457ZM3.45926 10.8839C1.40901 8.83363 1.40901 5.50951 3.45926 3.45926C5.50951 1.40901 8.83363 1.40901 10.8839 3.45926C12.9326 5.50801 12.9341 8.82875 10.8884 10.8794C10.8869 10.8809 10.8854 10.8823 10.8839 10.8839C10.8824 10.8854 10.8809 10.8869 10.8794 10.8884C8.82876 12.9341 5.50801 12.9326 3.45926 10.8839Z"
              fill="#201F1D"
            />
          </svg>

<<<<<<< HEAD
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{ backgroundColor: "white", marginLeft: "50px", height:"85%", width:"500px", display:"flex" }}>
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3851 12.4457C8.73482 14.5684 4.85538 14.4013 2.3986 11.9445C-0.23744 9.3085 -0.23744 5.03464 2.3986 2.3986C5.03464 -0.23744 9.3085 -0.23744 11.9445 2.3986C14.4013 4.85538 14.5684 8.73481 12.4457 11.3851L17.6014 16.5407C17.8943 16.8336 17.8943 17.3085 17.6014 17.6014C17.3085 17.8943 16.8336 17.8943 16.5407 17.6014L11.3851 12.4457ZM3.45926 10.8839C1.40901 8.83363 1.40901 5.50951 3.45926 3.45926C5.50951 1.40901 8.83363 1.40901 10.8839 3.45926C12.9326 5.50801 12.9341 8.82875 10.8884 10.8794C10.8869 10.8809 10.8854 10.8823 10.8839 10.8839C10.8824 10.8854 10.8809 10.8869 10.8794 10.8884C8.82876 12.9341 5.50801 12.9326 3.45926 10.8839Z"
                  fill="#201F1D"
                />
              </svg>

              <input
                placeholder="원하시는 사진 스타일을 검색해보세요"
                style={{
                  marginLeft: "50px",
                  width: "300px",
                  height: "40px",
                  border: "none",
                }}
              ></input>
        </div>

        <div>
          <span>
            마이페이지
          </span>
          <img
            src="img/1.png"
=======
          <input
            placeholder="원하시는 사진 스타일을 검색해보세요"
>>>>>>> d89a7417ecaf837b46ca0b9a2ad34c8c0fdfc4ed
            style={{
              marginLeft: "10px",
              width: "300px",
              height: "40px",
              border: "none",
              outline: "none",
            }}
          ></input>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>마이페이지</span>
        <img
          src="img/1.png"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginLeft: "30px",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
