"use client"

export default function TeamSection() {
  const leadership = [
    {
      name: "Jonathan Valdivieso",
      role: "Fundador & CEO",
      bio: "Hombre de negocios con raíces firmes. Con respeto por la tradición familiar, proyectó su legado al mundo sin perder la humildad del origen.",
      image: "/ceo.webp",
      years: "8 años liderando la empresa",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-50/30 to-white overflow-hidden">
      {/* Dynamic Elegant Background */}
      <div className="absolute inset-0">
        {/* Animated gradient waves */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-white to-green-100/30" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full animate-slow-float opacity-60" />
        <div
          className="absolute top-40 right-1/3 w-48 h-48 bg-gradient-to-bl from-green-200/35 to-green-300/25 rounded-full animate-slow-float opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-56 h-56 bg-gradient-to-tr from-orange-100/40 to-orange-200/30 rounded-full animate-slow-float opacity-45"
          style={{ animationDelay: "4s" }}
        />

        {/* Organic flowing shapes */}
        <div className="absolute top-1/3 right-1/4 w-80 h-40 bg-gradient-to-r from-green-100/25 to-green-200/15 rounded-full transform rotate-12 animate-gentle-sway opacity-40" />
        <div
          className="absolute bottom-1/4 left-1/4 w-72 h-36 bg-gradient-to-l from-orange-100/30 to-orange-200/20 rounded-full transform -rotate-6 animate-gentle-sway opacity-35"
          style={{ animationDelay: "3s" }}
        />

        {/* Subtle geometric accents */}
        <div className="absolute top-1/4 right-1/6 w-32 h-32 bg-orange-200/20 transform rotate-45 animate-slow-spin opacity-30" />
        <div
          className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-green-200/25 transform rotate-12 animate-slow-spin opacity-25"
          style={{ animationDelay: "5s" }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.6) 1px, transparent 0)`,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-chedar px-4 py-2 rounded-full text-sm font-avenir mb-6 border border-orange-100">
            <div className="w-2 h-2 bg-chedar rounded-full"></div>
            Nuestro Liderazgo
          </div>

          <h2 className="text-4xl md:text-5xl font-play text-verde mb-6 leading-tight">
            El Corazón de Nuestra
            <span className="block text-chedar">
              Quesería
            </span>
          </h2>

          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-green-400" />
            <div className="w-3 h-3 bg-orange-500 rounded-full mx-4" />
            <div className="w-12 h-px bg-green-400" />
          </div>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-avenir">
            El deseo genuino de servir bien a cada cliente, ofreciendo productos honestos, con sabor auténtico y
            atención cercana. Así empezó todo.
          </p>
        </div>

        {/* Leadership Card */}
        <div className="max-w-5xl mx-auto mb-20">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="bg-chedar rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-orange-100/50"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-96 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={person.image || "/placeholder.svg?height=400&width=400"}
                      alt={person.name}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Subtle overlay with brand colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />
                  </div>

                  <div className="absolute top-6 left-4 bg-verde/90 text-white text-sm px-4 py-2 rounded-full font-avenir shadow-lg">
                    {person.years}
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 relative">
                      {person.name}
                      <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
                    </h3>
                    <p className="text-white/50 text-lg font-avenir mb-6">{person.role}</p>
                    <p className="text-white/80 leading-relaxed text-lg font-avenir">{person.bio}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center group relative">
                      <div className="text-3xl font-play font-semibold text-white mb-1 group-hover:scale-110 transition-transform duration-200">
                        8+
                      </div>
                      <div className="text-sm text-white/80 font-avenir uppercase tracking-wide">Años</div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300" />
                    </div>
                    <div className="text-center group relative">
                      <div className="text-3xl font-play font-semibold text-verde mb-1 group-hover:scale-110 transition-transform duration-200">
                        100+
                      </div>
                      <div className="text-sm text-white/80 font-avenir uppercase tracking-wide">Productos</div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-verde group-hover:w-full transition-all duration-300" />
                    </div>
                    <div className="text-center group relative">
                      <div className="text-3xl font-play font-semibold text-white mb-1 group-hover:scale-110 transition-transform duration-200">
                        1000+
                      </div>
                      <div className="text-sm text-white/80 font-avenir uppercase tracking-wide">Clientes</div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
          <img
            src="https://images.pexels.com/photos/5086968/pexels-photo-5086968.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Jonathan Valdivieso trabajando"
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />

          {/* Overlay with subtle brand color accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-orange-900/20" />

          <div className="relative z-10 py-16 px-8 lg:py-20 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* Quote Icon with brand colors */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-orange-400/30">
                <svg className="w-8 h-8 text-chedar" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-avenir italic relative">
                "No solo creamos productos; construimos un legado. Cada artículo lleva el nombre de nuestra familia y la
                pasión que nos impulsó a transformar un sueño en realidad."
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-4" />
                <p className="text-lg font-semibold font-avenir tracking-wide text-white mb-1">Jonathan Valdivieso</p>
                <p className="text-chedarlow font-avenir">Fundador & CEO</p>
              </div>
            </div>
          </div>

          {/* Corner decorative elements with brand colors */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange-400/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-orange-400/30" />
        </div>

        {/* Values Section with brand colors */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 group hover:bg-chedar/10 rounded-2xl backdrop-blur-lg transition-all duration-300">
            <div className="w-12 h-12 bg-chedar rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-play text-verde mb-2">Pasión</h3>
            <p className="text-verde/80 text-sm">Cada producto refleja nuestro amor por la tradición quesera</p>
          </div>

          <div className="text-center p-6 group hover:bg-verde/10 rounded-2xl hover:backdrop-blur-lg transition-all duration-300">
            <div className="w-12 h-12 bg-verde rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-play text-verde mb-2">Calidad</h3>
            <p className="text-verde/80 text-sm">Compromiso inquebrantable con la excelencia en cada proceso</p>
          </div>

          <div className="text-center p-6 group hover:bg-chedar/10 rounded-2xl hover:backdrop-blur-lg transition-all duration-300">
            <div className="w-12 h-12 bg-chedar rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-play text-verde mb-2">Familia</h3>
            <p className="text-verde/80 text-sm">Valores familiares que se extienden a cada cliente</p>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for smooth, lively animations */}
      <style jsx>{`
        @keyframes slow-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(-10px) translateX(-15px) scale(0.95);
          }
          75% {
            transform: translateY(-25px) translateX(5px) scale(1.02);
          }
        }
        
        @keyframes gentle-sway {
          0%, 100% {
            transform: rotate(12deg) translateY(0px);
          }
          33% {
            transform: rotate(15deg) translateY(-10px);
          }
          66% {
            transform: rotate(9deg) translateY(5px);
          }
        }
        
        @keyframes slow-spin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        
        .animate-slow-float {
          animation: slow-float 12s ease-in-out infinite;
        }
        
        .animate-gentle-sway {
          animation: gentle-sway 15s ease-in-out infinite;
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
