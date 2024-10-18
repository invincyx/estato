"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Search, X } from "lucide-react"
import NavBar from "./NavBar"

export default function HeroSection() {
  const f = () => {
    console.log("Placeholder function 'f'");
  };
  return (
    <div className="relative">
      <NavBar />
      <main>
        <div className="relative h-[calc(60vh-64px)]">
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="House exterior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Agents. Tours.<br />Loans. Homes.
            </h1>
            <div className="w-full max-w-2xl">
              <div className="relative ">
                <Input
                  className="w-full py-8 pl-4 pr-12 text-lg rounded-full bg-white"
                  placeholder="Enter an address, neighborhood, city, or ZIP code"
                />
                <Button className="absolute right-1 top-1 rounded-full mt-3 mr-3 p-5" size="icon" onClick={f}>
                  <Search className="h-10 w-10" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Dialog open={false}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Sign in with Google</DialogTitle>
            <DialogDescription className="text-center">
              Use your Google Account to sign in to Zillow
            </DialogDescription>
          </DialogHeader>
          <div className="text-center">
            <p className="mb-4">No more passwords to remember. Signing in is fast, simple and secure.</p>
            <Button className="w-full mb-4">Continue</Button>
            <div className="flex justify-end">
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}