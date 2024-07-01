import React from "react";
import { CardDetails } from "./details";
import { CardContact } from "./contact";
import { CardStatus } from "./status";
import { CardEmployer } from "./employer";

const page = () => {
  return (
    <div className="space-y-4">
      <CardDetails />
      <CardContact />
      <CardStatus />
      <CardEmployer />
    </div>
  );
};

export default page;
