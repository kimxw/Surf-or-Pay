'use client'

import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";

export default function MyOcean() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
      <div>
        <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} animate={true}>
          {/* Sidebar content goes here */}
        </Sidebar>

        {/* Your page content */}
        <div className="content">
          <h1>Your main content here</h1>
        </div>
      </div>
    );
    
  }