import React from "react"
import { Button } from "./ui/button"

const Domains = () => {
  const domains = [
    {
      title: "AWS",
      description: "“Take your ideas online - build, host, and scale apps in the cloud like a pro.”",
      buttonText: "Know More →",
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
        </svg>
      )
    },
    {
      title: "Cyber Security", 
      description: "“Become a digital guardian - protect systems and beat hackers at their own game.”",
      buttonText: "Know More →",
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
        </svg>
      )
    },
    {
      title: "Networking",
      description: " The Networking domain explores the art of communication that powers the modern tech realm.", 
      buttonText: "Know More →",
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="px-6 py-20 bg-slate-900 min-h-screen flex items-center" style={{ perspective: '1500px' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-center mb-20 text-white">
          Our <span className="text-orange-500">Domains</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-center justify-center">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-700 ease-out h-full"
              style={{
                transform: `perspective(1500px) rotateX(25deg) rotateY(${index === 0 ? '-35deg' : index === 2 ? '35deg' : '0deg'}) translateZ(-50px)`,
                transformStyle: 'preserve-3d',
                transformOrigin: 'center bottom'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg) translateZ(80px) scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `perspective(1500px) rotateX(25deg) rotateY(${index === 0 ? '-35deg' : index === 2 ? '35deg' : '0deg'}) translateZ(-50px) scale(1)`;
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-700/90 to-slate-900/95 
                            rounded-3xl p-6 text-center h-[400px] flex flex-col justify-between
                            shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)]
                            border border-slate-600/40
                            transition-all duration-700
                            group-hover:shadow-[0_40px_100px_rgba(249,115,22,0.4),0_0_0_1px_rgba(249,115,22,0.3)]
                            group-hover:border-orange-500/60
                            overflow-hidden
                            backdrop-blur-xl
                            before:absolute before:inset-0 before:bg-gradient-to-b 
                            before:from-white/5 before:via-transparent before:to-black/20
                            before:rounded-3xl before:pointer-events-none">
                
                {/* Animated background gradient with stronger effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-400/8 to-orange-600/12 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                
                {/* Enhanced glowing edge effect */}
                <div className="absolute inset-0 rounded-3xl 
                              bg-gradient-to-r from-transparent via-orange-500/30 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700
                              blur-sm"></div>
                
                {/* Top section with icon */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-4">
                  {/* Icon container with enhanced 3D effect */}
                  <div className="relative w-20 h-20 mx-auto mb-6 
                                bg-gradient-to-br from-slate-600/90 to-slate-800/90 
                                rounded-3xl flex items-center justify-center
                                shadow-[0_15px_50px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)]
                                transition-all duration-600
                                group-hover:scale-115 group-hover:rotate-12
                                group-hover:shadow-[0_25px_60px_rgba(249,115,22,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
                                border border-slate-500/60 group-hover:border-orange-400/80
                                backdrop-blur-sm
                                transform-gpu">
                    <div className="transition-all duration-600 group-hover:scale-110 relative z-10">
                      <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        {domain.icon.props.children}
                      </svg>
                    </div>
                    {/* Enhanced icon glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-orange-500/30 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-600 blur-2xl"></div>
                    {/* Inner light reflection */}
                    <div className="absolute top-2 left-2 w-8 h-8 bg-white/10 rounded-full blur-lg 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-white transition-all duration-500 
                               group-hover:text-orange-300 leading-tight">{domain.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed transition-all duration-500
                              group-hover:text-gray-300 text-sm px-2">{domain.description}</p>
                </div>
                
                {/* Bottom section with button */}
                <div className="relative z-10 pb-2">
                  {/* Enhanced Button with stronger 3D effect */}
                  <Button className="relative bg-gradient-to-r from-orange-500 to-orange-600 
                                   hover:from-orange-400 hover:to-orange-500 
                                   text-white font-bold px-8 py-3 rounded-2xl text-base
                                   transition-all duration-400
                                   hover:scale-110 hover:shadow-[0_15px_40px_rgba(249,115,22,0.6)]
                                   border-none
                                   transform group-hover:translate-y-[-4px]
                                   overflow-hidden
                                   shadow-[0_8px_25px_rgba(249,115,22,0.3)]
                                   group-hover:shadow-[0_15px_40px_rgba(249,115,22,0.5)]">
                    <span className="relative z-10 font-semibold">{domain.buttonText}</span>
                    {/* Enhanced button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 
                                  skew-x-12"></div>
                    {/* Button glow */}
                    <div className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-xl 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  </Button>
                </div>
                
                {/* Enhanced corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/15 to-transparent 
                              rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                
                {/* Enhanced bottom glow line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 
                              bg-gradient-to-r from-transparent via-orange-500 to-transparent
                              group-hover:w-4/5 transition-all duration-800 rounded-full
                              shadow-[0_0_20px_rgba(249,115,22,0.8)]"></div>
                
                {/* Side gradient accents */}
                <div className="absolute left-0 top-1/3 w-2 h-1/3 bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0 
                              rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-600"></div>
                <div className="absolute right-0 top-1/3 w-2 h-1/3 bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0 
                              rounded-l-full opacity-0 group-hover:opacity-100 transition-all duration-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
