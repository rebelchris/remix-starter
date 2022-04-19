import { Link, Outlet } from "@remix-run/react";

export default function PostAdmin() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        My super cool admin
      </h1>
      <header className="border-b-2 mb-2 p-2">
        <ul className='flex gap-3'>
          <li>
            <Link
              to={'/admin'}
              className="text-blue-600 underline"
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              to={'posts'}
              className="text-blue-600 underline"
            >
              Posts
            </Link>
          </li>
        </ul>
      </header>
        <main className='p-4'>
          <Outlet />
        </main>
    </div>
  );
}
