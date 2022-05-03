import {Outlet } from "@remix-run/react";

export default function Blog() {
  return (
    <div className='prose'>
      <h1>Welcome to the blog:</h1>
      <Outlet />
    </div>
  );
}
