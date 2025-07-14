import React from "react";
import useUserStore from "../stores/UserStore";

const Auth = () => {
  const { setUser, users } = useUserStore((store) => store);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authSubmit = (data: any) => {
    const authData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(authData);
    setUser(authData);
  };
  return (
    <React.Fragment>
      <section className="flex justify-center items-center h-screen">
        <form action={authSubmit} className="bg-amber-200 p-3 ">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="password" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className=" flex flex-col justify-around p-2 items-center">
        <span>{users?.name}</span>
        <span>{users?.email}</span>
        <span>{users?.password}</span>
      </section>
    </React.Fragment>
  );
};

export default Auth;
