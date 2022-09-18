import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import InputGroup from "./InputGroup";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/register", {
        password,
        username,
      });
      console.log(res);
      //   Router.push("/login");
    } catch (error: any) {
      console.error(error);
      setErrors(error?.response?.data || {});
    }
  };

  return (
    <div className="bg-white text-black">
      <h2>회원가입</h2>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <InputGroup
          placeholder="Username"
          value={username}
          setValue={setUsername}
          error={errors.username}
        />
        <InputGroup
          placeholder="Password"
          value={password}
          setValue={setPassword}
          error={errors.password}
        />

        <button type="submit">
          <a>회원가입</a>
        </button>
      </form>
      <p>이미 가입하셨나요?</p>
      <Link href="/login">
        <a>로그인</a>
      </Link>
    </div>
  );
};

export default Login;
