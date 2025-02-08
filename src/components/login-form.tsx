'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getUser, getRandomUser, getUsers } from "../../src/database";
import React, {useState, useEffect} from "react"

export function LoginForm({ className, ...props }) {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const router = useRouter();

  useEffect(() => {
    const allUsers = getUsers();
    setUsers(allUsers);
  }, []);

  const handleUserSelection = (event) => {
    setSelectedUserId(event.target.value);
  };

  const handleAuthentication = () => {
    if (selectedUserId) {
      const user = getUser(selectedUserId);
      console.log('Selected user for "authentication":', user);
      router.push('/dashboard');
    } else {
      console.error('No user selected');
      alert('Please refresh & select a user to continue');
    }
  };

  return (
    <div className="w-full h-full relative">
      <iframe 
        src="https://my.spline.design/untitled-e0e807542552f95e92e67ab9e1801788/"
        style={{
          width: '100%',
          height: '90vh',
          borderRadius: '3rem',
          border: 'none'
        }}
      ></iframe>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col items-center space-y-4">
          <Select className="w-[200%] h-[55px] rounded-custom" style={{ borderRadius: '50px' }} onChange={handleUserSelection}>
            <SelectTrigger className="w-[200%] h-[55px]">
              <SelectValue placeholder="Your Good Name" className="w-[200%] h-[55px]" />
            </SelectTrigger>
            <SelectContent>
              {users.map(user => (
                <SelectItem key={user.id} value={user.id}>
                  {user.info.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="w-[200%] h-[55px] bg-black text-white border-none" onClick={handleAuthentication}>
            <span>Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
}