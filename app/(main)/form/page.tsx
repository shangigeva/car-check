import React from "react";
import { CardDetails } from "./details";
import { CardContact } from "./contact";
import { CardStatus } from "./status";

const page = () => {
  return (
    <div className="space-y-4">
      <CardDetails />
      <CardContact />
      <CardStatus />
    </div>
  );
};

export default page;
