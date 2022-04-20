import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        These are all auth routes
      </h1>
      <main className='p-4'>
        <Outlet />
      </main>
    </div>
  );
}
