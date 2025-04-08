import React from "react";

export default function Layout({ children }) {
  return (
    <div className="container py-5">
      <div className="bg-white rounded-4 shadow p-4 border border-info-subtle">
        <header className="mb-4 border-bottom pb-2 d-flex justify-content-between align-items-center">
          <h1 className="h4 text-primary mb-0">Bioflow Tracker 实验流程系统</h1>
          <span className="text-secondary small">Powered by Bootstrap</span>
        </header>
        <main>{children}</main>
        <footer className="pt-4 mt-4 border-top text-center text-muted small">
          实验记录系统 © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
