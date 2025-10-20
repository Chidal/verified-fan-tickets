"use client";
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function EditProfile() {
  const [notifications, setNotifications] = useState({ email: true, push: false });
  const { getRootProps, getInputProps } = useDropzone({ onDrop: (acceptedFiles) => console.log(acceptedFiles) });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-glam-gold mb-4">Edit Profile</h1>
      <div {...getRootProps()} className="border-2 border-dashed p-4 mb-4">
        <input {...getInputProps()} />
        <p>Drop profile picture here</p>
      </div>
      <div className="mb-4">
        <label className="mr-2">Notifications:</label>
        <label className="mr-4">
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
          /> Email
        </label>
        <label>
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
          /> Push
        </label>
      </div>
    </div>
  );
}