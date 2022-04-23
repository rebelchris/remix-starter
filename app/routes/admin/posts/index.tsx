import { Link } from "@remix-run/react";

export function loader() {
  throw new Error('I am a failure!')
}

export function ErrorBoundary({ error }) {
  return (
    <div className='bg-red-100 border border-red-300 p-4'>
      <h1 className='text-2xl'>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default function AdminIndex() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
    </p>
  );
}
