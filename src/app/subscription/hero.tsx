'use client';

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Subscription() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-r from-black via-red-950 to-black">
      <Card className="w-full max-w-md bg-[#0e0e0e] text-white border-2 border-red-700 rounded-3xl hover:shadow-lg hover:shadow-red-600">
        <CardHeader>
          <CardTitle className="text-red-600 text-center text-2xl mt-2">
            Subscribe Now
          </CardTitle>
          <CardDescription className="text-white text-center text-md">
            Get subscription in one-click.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="bg-transparent text-white focus:border-red-600 hover:border-red-600"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="plan" className="text-white">
                  Select Plan
                </Label>
                <Select>
                  <SelectTrigger id="plan" className="bg-transparent border border-gray-600 text-white">
                    <SelectValue placeholder="Choose Plan" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0e0e0e] text-white">
                    <SelectItem value="250" className="text-md">$250 / Month</SelectItem>
                    <SelectItem value="350" className="text-md">$350 / 3 Months</SelectItem>
                    <SelectItem value="450" className="text-md">$450 / 6 Months</SelectItem>
                    <SelectItem value="700" className="text-md">$700 / Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            className="border border-red-600 bg-transparent hover:bg-red-700 hover:text-white"
          >
            Cancel
          </Button>
          <Button className="bg-red-700 hover:bg-[#0e0e0e] border border-red-600">
            Subscribe
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}


