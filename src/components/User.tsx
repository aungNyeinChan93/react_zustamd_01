import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { auth } from "./features/UserSlice";

const User = () => {
  const { user } = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(auth({ name: "aung", email: "anc@123", password: "123123" }));
  }, [dispatch]);

  return (
    <React.Fragment>
      <section>
        {user.name}
        {user.email}
        {user.password}
      </section>
    </React.Fragment>
  );
};

export default User;
