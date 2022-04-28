import { Form } from "@remix-run/react";
import { json } from "@remix-run/node";

export const action = async ({ request }) => {
  const formData = await request.formData();
  return json({success: true});
};

export default function Login() {
  return (
    <Form method="post" className="flex flex-col">
      <label>
        Username:{" "}
        <input type="text" name="username" />
      </label>
      <label>
        Password:{" "}
        <input type="password" name="password" />
      </label>
      <button
        type="submit"
      >
        Login
      </button>
    </Form>
  );
}
