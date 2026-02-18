import React, { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
import { Input } from "./components/ui/input"
import Navbar from "./components/Navbar"
import Domains from "./components/Domains"
import Legacy from "./components/Legacy"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

function App() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="px-6 py-20 relative pt-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Welcome to Technovation
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                "The Networking Club"
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Hey there, future innovator! 👋
                At Technovation, we tinker, experiment, and create with hacking, cloud, and networking - all fueled by late-night ideas and endless curiosity.
                Stick around — your next big idea might just spark here
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">About Us</Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 bg-transparent"
                >
                  Connect
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto relative">
                {/* Logo image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Networking Club Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center py-8">
          <div className="w-24 h-0.5 bg-gray-600"></div>
        </div>

        {/* Our Domains Section */}
        <section id="departments">
          <Domains />
        </section>

        {/* Divider */}
        <div className="flex justify-center py-8">
          <div className="w-24 h-0.5 bg-gray-600"></div>
        </div>

        {/* Our Legacy Section */}
        <section id="legacy">
          <Legacy />
        </section>

        {/* Our Vision Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our <span className="text-orange-500">Vision</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision Cards */}
              {[
                {
                  title: "Collaborate",
                  description:
                    "Your idea, our collaboration. Let’s join forces to build something meaningful together",
                },
                {
                  title: "Connect",
                  description:
                    "Got a tech idea or question? Connect with us and start creating something impactful",
                },
                {
                  title: "Grow",
                  description:
                    "From debugging questions to building - grow as a thinker, creator, and tech innovator.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 p-8 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center py-8">
          <div className="w-24 h-0.5 bg-gray-600"></div>
        </div>
        {/* About Us Section */}
        <section id="team">
          <AboutUs />
        </section>
        <div className="flex justify-center py-8">
          <div className="w-24 h-0.5 bg-gray-600"></div>
        </div>

        {/* FAQ Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Frequently <span className="text-orange-500">Asked</span> Question
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
  ["What is HealConnect?", "HealConnect is a platform that connects patients with healthcare professionals."],
  ["Is HealConnect free?", "Yes, HealConnect offers free basic features."],
  ["How do I book an appointment?", "You can book appointments directly from the dashboard."],
  ["Is my data secure?", "We use encryption and secure servers to protect your data."],
].map(([question, answer], index) => (
  <AccordionItem
    key={index}
    value={`item-${index}`}
    className="border-l-4 border-orange-500 bg-slate-800 px-6"
  >
    <AccordionTrigger className="text-left hover:no-underline">
      {question}
    </AccordionTrigger>

    <AccordionContent className="text-gray-400">
      {answer}
    </AccordionContent>
  </AccordionItem>
))}
              
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default App
