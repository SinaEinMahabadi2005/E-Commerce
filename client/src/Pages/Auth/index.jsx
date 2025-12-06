import { useState } from "react";
import LoginForm from "./Login";
import Register from "./Register";

export default function Auth() {
  const [pageType, setPageType] = useState("login");
  const handlePageTypeChange = () => {
    setPageType(pageType === "login" ? "register" : "login");
  };
  return (
    <>
      {pageType === "login" ? (
        <LoginForm handlePageTypeChange={handlePageTypeChange} />
      ) : (
        <Register handlePageTypeChange={handlePageTypeChange} />
      )}
    </>
  );
}
