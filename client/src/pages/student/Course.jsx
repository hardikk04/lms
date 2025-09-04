import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Course = () => {
  return (
    <div>
      <Card
        className={
          "overflow-hidden pt-0 gap-3 rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        }
      >
        <div className="relative">
          <img
            src="https://miro.medium.com/v2/resize:fit:1000/0*dCkBR3Q3lkGMKeAh.png"
            alt="course-img"
            className="w-full h-36 object-cover rounded-t-lg"
          />
        </div>
        <CardContent className={"space-y-3"}>
          <h2 className="hover:underline font-bold text-lg truncate">
            Nextjs full Course in hindi
          </h2>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <Avatar className={"h-8 w-8"}>
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
                  alt="avatar"
                ></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="font-medium text-sm">Hardik Stack</h2>
            </div>
            <Badge className="bg-blue-600 text-white px-2 py-1 text-sm">Advance</Badge>
          </div>
          <div className="text-lg font-bold">
            <span>₹4999</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Course;
