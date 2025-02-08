import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex  min-h-svh flex-col items-center justify-center " style={{ backgroundColor: '#f6f8fc' }}>
      <div className="w-[80%]" style={{
        border: ' 1px solid #ebeff6',
        boxShadow: ' 0 6px 20px 0 #14142b0f',
        borderRadius: '3rem',
        overflow: 'hidden',
      }}>
        <LoginForm />
      </div>
    </div>
  )
}
