"use client";
export default function ResetPassword() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-glam-gold mb-4">Reset Password</h1>
      <input type="email" placeholder="Enter email" className="p-2 border rounded w-full mb-2" />
      <button className="btn bg-glam-gold hover:bg-yellow-600 text-white px-4 py-2 rounded">
        Send Reset Link
      </button>
    </div>
  );
}