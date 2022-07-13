import React from 'react'
import {AiFillLike} from 'react-icons/ai';
import {AiOutlineLike} from 'react-icons/ai';

export default function Bai1() {
    const [like, setLike] = React.useState(false);
  return (
    <h1>
    {like && (
      <AiFillLike
        onClick={() => {
          setLike(false);
        }}
      />
    )}
    {!like && (
      <AiOutlineLike
        onClick={() => {
          setLike(true);
        }}
      />
    )}
  </h1>
  )
}
