import React from "react";
import { Button, Input } from "../../components";

import likeImg from "../../assets/home/like.svg";
import message from "../../assets/home/message.svg";
import favorites from "../../assets/home/favorites.svg";

import "./cardPost.scss";

export const CardPost = ({ post }) => {
  return (
    <div className="cardPost">
      <div className="cardPost-img">
        <img src={post.img} alt="" />
      </div>

      <div className="cardPost-lower">
        <div className="cardPost-lower-info">
          <div className="cardPost-lower-info-like">
            <div>
              <img src={likeImg} alt="" /> <span>24</span>
            </div>

            <div>
              <img src={message} alt="" /> <span>24</span>
            </div>
          </div>
          <div className="cardPost-lower-info-favorites">
            <img src={favorites} alt="" />
          </div>
        </div>
        <div className="cardPost-lower-descriptions">
          <p>
            <strong>user:</strong>
            {post.text}
          </p>
        </div>
        <div className="cardPost-lower-hashtag">
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
          <span>#tamerlan,</span>
        </div>
        {/* <div className="cardPost-lower-comments">
                  <li className="cardPost-lower-comments-comment">
                    user2: Lorem Ipsum - это текст-"рыба", часто используемый
                  </li>
                  <li className="cardPost-lower-comments-comment">
                    user2: Lorem Ipsum - это текст-"рыба", часто используемый
                  </li>{" "}
                  <li className="cardPost-lower-comments-comment">
                    user2: Lorem Ipsum - это текст-"рыба"asddddddddddddddd
                    ddddddddd
                  </li>
                </div> */}
      </div>

      <form action="" className="cardPost-form">
        <Input
          className="cardPost-form-input"
          placeholder="Введите коммент"
          type="text"
        />
        <Button variant="cardPostBtn">Add</Button>
      </form>
    </div>
  );
};
