import React from "react";

function Callout() {
  return (
    <div>
      <section className="bg-red-700 p-10 max-md:pb-50">
        <footer className="pt-5 text-white flex flex-col items-center">
          <header className="font-bold">
            <h1 className="text-4xl flex flex-col items-center mb-3">
              <p>Ohmni Gold</p>
              <p>Logistika Ltd</p>
            </h1>
          </header>
          <p>&copy; 2025 Ohmni Gold Logistika. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
}

export default Callout;
