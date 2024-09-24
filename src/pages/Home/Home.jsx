import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.scss";
import { CardPost } from "../../components/CardPost/CardPost";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const posts = useSelector((state) => state.post.array);

  return (
    <>
      <div className="container">
        {posts.map((item) => (
          <CardPost key={item.id}  item={item} />
        ))}
      </div>
    </>
  );
};
