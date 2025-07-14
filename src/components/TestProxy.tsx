import React, { useEffect } from "react";
import useCounter from "../stores/UseCounter";
import useUserStore from "../stores/UserStore";

const TestProxy = () => {
  const { count } = useCounter((store) => store);
  const { setUser, users } = useUserStore((store) => store);
  console.log(users);

  useEffect(() => {
    setUser({ name: "aung", email: "anc@123", password: 123123123 });
  }, []);
  return (
    <React.Fragment>
      <section>test proxy - {count}</section>
      {users?.name}
      {users?.email}
      {users?.password}
    </React.Fragment>
  );
};

export default TestProxy;
