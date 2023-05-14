import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const index = () => {
  const certificateRef = useRef(null);
  // function to print certificate
  const printCertificate = useReactToPrint({
    content: () => certificateRef.current!,
  });

  return (
    <div className="w-screen h-screen grid grid-cols-8">
      {/* left most template section */}
      <div className="col-span-2 border-2 border-gray-100 space-y-5 px-2">
        <h1 className="text-center font-semibold">Available Templates</h1>

        {/* for displaying all the templates */}
        <div className="space-y-5">
          <div className="h-40 flex items-center justify-center bg-gray-100 font-bold">
            Template 1
          </div>
        </div>
      </div>

      {/* middle one for visualizing the template */}
      <div className="col-span-4 border-2 border-gray-100 px-2 space-y-5">
        <h1 className="text-center font-semibold">Template Overview</h1>

        {/* for displaying the template */}
        <div
          ref={certificateRef}
          className="bg-gray-100 h-96 w-full flex flex-col items-center justify-center space-y-2"
        >
          <h1 className="text-5xl font-bold tracking-widest">CERTIFICATE</h1>
          <h3 className="text-3xl font-bold">OF PARTICIPATION</h3>
          <h4 className="text-lg font-bold">
            THIS CERTIFICATE IS PROUDLY PRESENT TO
          </h4>
          <h2 className="text-4xl font-bold underline">Vinay Pratap Singh</h2>
          <p className="font-bold">
            of team HARVI for participating in this hackathon
          </p>
          <h3 className="text-xl font-bold">24 hours Hackathon</h3>
        </div>
      </div>

      {/* right most for template editor */}
      <div className="col-span-2 border-2 border-gray-100 space-y-5 px-2">
        <h1 className="text-center font-semibold">Template Editor</h1>
        {/* form for changing the form data */}
        <form></form>
        <button onClick={printCertificate}>Download Certificate</button>
      </div>
    </div>
  );
};

export default index;
