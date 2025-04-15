import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox"

export function Subscription() {
  return ( <div className="h-[700px] w-screen flex items-center justify-between
   bg-gradient-to-r from-black via-red-950 to-black ">
    <Card className="grid  justify-center text-white bg-[#0e0e0e] ml-[400px] w-[400px] h-[450px] border-x-2
     border-y-2 border-red-700 rounded-3xl  hover:shadow-lg hover:shadow-red-600 ">
      <CardHeader>
        <CardTitle className="text-red-600 text-center text-2xl mt-2">Subscribe Now</CardTitle>
        <CardDescription className="text-white text-center text-md">Get subscription in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-white text mb-1">Email</Label>
              <Input id="email" placeholder="Email Address" className="focus:border-red-600  bg-transparent hover:border-red-600 text-white" />
            </div>
            <div className="flex flex-col space-y-1.5 ">
              <Label htmlFor="framework" className="text-white text mb-1">Select Plan</Label>
              <Select >
                <SelectTrigger id="framework"  >
                  <SelectValue placeholder="Select"  />
                </SelectTrigger>
                <SelectContent position="popper"  className="bg-[#0e0e0e] text-white">
                  <SelectItem value="next" className="text-md">250$</SelectItem>
                  <SelectItem value="sveltekit " className="text-md">350$</SelectItem>
                  <SelectItem value="astro" className="text-md">450$</SelectItem>
                  <SelectItem value="nuxt" className="text-md">700$</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-white">
        <Button variant="outline" className="bg-[#0e0e0e] hover:text-white border border-red-600 hover:bg-red-700 ">Cancel</Button>

        </div>
        <Button className="bg-red-700  hover:bg-[#0e0e0e] border border-red-600">Subscribe</Button>
      </CardFooter>
    
    </Card>
  


    </div>
  )
}

