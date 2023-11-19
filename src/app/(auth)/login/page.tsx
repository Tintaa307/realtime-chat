"use client"

import Button from "@/components/ui/Button"
import { FC, useEffect, useState } from "react"
import { signIn } from "next-auth/react"
import { toast } from "react-hot-toast"
import EntryAnimation from "@/components/EntryAnimation"

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [finish, setFinish] = useState<boolean>(false)

  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn("google")
    } catch (error) {
      // display error message to user
      toast.error("Something went wrong with your login.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!finish ? (
        <EntryAnimation setFinish={setFinish} />
      ) : (
        <main className="w-full h-screen flex items-center justify-center flex-col gap-12">
          <div className="w-full h-max flex items-center justify-center">
            <h1 className="text-black text-3xl font-semibold">
              Bienvenido al chat de pillwise
            </h1>
          </div>
          <div className="w-full h-max flex items-center justify-center">
            <button
              onClick={loginWithGoogle}
              className="w-[260px] h-12 outline-none rounded-md bg-[#2A0E8F] text-white flex items-center justify-center flex-row gap-3 "
            >
              Iniciar con Google{" "}
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            </button>
          </div>
        </main>
      )}
    </>
  )
}

export default Page
