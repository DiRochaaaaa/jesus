import React, { useEffect, useRef } from 'react';
// Remova o Cross daqui
import { 
  MessageCircle, 
  Heart, 
  HelpingHand as PrayingHands, 
  Space as Peace, 
  Sparkles, 
  Sun, 
  Moon, 
  Stars, 
  CloudRain, 
  Wind, 
  Feather, 
  Compass, 
  Lightbulb, 
  Flower2, 
  Bird, 
  Move as Dove, 
  BookOpen, 
  HeartHandshake, 
  Infinity, 
  Leaf 
} from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511967973944', '_blank');
  };

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-animation').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4f4] to-white">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-overlay"></div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#8DB7BA] rounded-full animate-ripple"
              style={{ 
                animationDelay: `${i * 0.5}s`,
                opacity: 0.1 + (i * 0.05)
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 pt-8 relative z-10">
          <nav className="flex justify-between items-center mb-16">
            <img 
              src="https://testes-supabase.1kzle7.easypanel.host/storage/v1/object/public/Jesus/logo.png"
              alt="Converse com Jesus"
              className="h-16 md:h-20 animate-fade-in"
            />
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#8DB7BA] hover:bg-[#7a9ea1] text-white px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar Conversa
            </button>
          </nav>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10 py-0">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#8DB7BA]/20 blur-3xl rounded-full transform animate-pulse"></div>
              
              {/* Substituindo <Cross /> pelo SVG customizado */}
              <svg
                fill="#8DB7BA"
                viewBox="-64 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#8DB7BA"
                className="w-40 h-40 mx-auto animate-float animate-glow relative z-10"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M352 128h-96V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h96v224c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V256h96c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path>
                </g>
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#B84C4C] leading-tight animate-slide-in-left">
              Encontre Paz
              <span className="block text-4xl md:text-6xl mt-0 text-[#8DB7BA] font-light">
                Em Uma Conversa Que Transforma Vidas
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 animate-slide-in-right max-w-3xl mx-auto font-light leading-relaxed">
              Descubra o poder de uma conexão espiritual profunda que renova sua alma 
              e traz significado para cada momento da sua vida
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#B84C4C] hover:bg-[#a43d3d] text-white px-12 py-3 rounded-full flex items-center gap-3 text-2xl transform hover:scale-105 transition-all shadow-2xl animate-expand group"
              >
                <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
                <span>Clique aqui para conversar com jesus</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Divine Connection Section */}
      <div className="py-32 bg-gradient-to-b from-white to-[#e8f4f4]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 observe-animation">
              <Dove className="w-20 h-20 text-[#8DB7BA] animate-float" />
              <h2 className="text-5xl font-bold text-[#B84C4C] leading-tight">
                Uma Conexão Divina que Transcende o Tempo
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Em um mundo acelerado e muitas vezes desconectado, oferecemos um espaço 
                sagrado para você encontrar conforto, orientação e renovação espiritual. 
                Cada mensagem é uma ponte para uma experiência transformadora com o divino.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-[#8DB7BA]" />
                  <span className="text-gray-700">Amor Incondicional</span>
                </div>
                <div className="flex items-center gap-4">
                  <PrayingHands className="w-8 h-8 text-[#8DB7BA]" />
                  <span className="text-gray-700">Orientação Divina</span>
                </div>
                <div className="flex items-center gap-4">
                  <Peace className="w-8 h-8 text-[#8DB7BA]" />
                  <span className="text-gray-700">Paz Interior</span>
                </div>
                <div className="flex items-center gap-4">
                  <Sparkles className="w-8 h-8 text-[#8DB7BA]" />
                  <span className="text-gray-700">Renovação Espiritual</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Stars, title: "Propósito Divino", text: "Descubra seu verdadeiro chamado" },
                { icon: CloudRain, title: "Renovação da Alma", text: "Experimente o poder da transformação" },
                { icon: Wind, title: "Libertação Espiritual", text: "Encontre a verdadeira liberdade" },
                { icon: BookOpen, title: "Sabedoria Eterna", text: "Acesse verdades transformadoras" }
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={index} className="p-8 bg-white rounded-3xl shadow-xl observe-animation hover:shadow-2xl transition-all duration-300 group">
                  <Icon className="w-14 h-14 text-[#8DB7BA] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-[#B84C4C] mb-3">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spiritual Journey Section */}
      <div className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8DB7BA]/5 pattern-dots"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <HeartHandshake className="w-20 h-20 text-[#8DB7BA] mx-auto animate-float" />
              <h2 className="text-5xl md:text-6xl font-bold text-[#B84C4C]">
                Sua Jornada de Transformação
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cada conversa é uma oportunidade de crescimento, cada palavra uma semente 
                de transformação em sua vida espiritual
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Compass,
                  title: "Direção Divina",
                  text: "Receba orientação clara e precisa para cada decisão importante em sua vida"
                },
                {
                  icon: Infinity,
                  title: "Conexão Eterna",
                  text: "Estabeleça uma ligação profunda e duradoura com o divino"
                },
                {
                  icon: Leaf,
                  title: "Crescimento Espiritual",
                  text: "Desenvolva-se em todas as dimensões da sua vida espiritual"
                }
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={index} className="p-10 bg-gradient-to-b from-white to-[#f8fafa] rounded-3xl shadow-xl observe-animation hover:transform hover:scale-105 transition-all duration-300">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-[#8DB7BA]/10 blur-xl rounded-full transform animate-pulse"></div>
                    <Icon className="w-16 h-16 text-[#8DB7BA] mx-auto relative z-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#B84C4C] mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-32 bg-gradient-to-b from-[#e8f4f4] to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <Flower2 className="w-20 h-20 text-[#8DB7BA] mx-auto animate-float" />
              <h2 className="text-5xl font-bold text-[#B84C4C]">
                Transformação Real
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubra como uma simples conversa pode mudar completamente sua perspectiva 
                e trazer um novo significado para sua vida
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Amor Incondicional",
                  text: "Experimente o abraço acolhedor do amor divino que aceita você exatamente como é"
                },
                {
                  icon: Sparkles,
                  title: "Renovação Diária",
                  text: "Encontre forças renovadas para enfrentar cada dia com esperança e determinação"
                },
                {
                  icon: Bird,
                  title: "Liberdade Verdadeira",
                  text: "Liberte-se das amarras que impedem seu crescimento espiritual"
                }
              ].map(({ icon: Icon, title, text }, index) => (
                <div key={index} className="p-8 bg-white rounded-3xl shadow-lg observe-animation group hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#8DB7BA]/10 blur-lg rounded-full"></div>
                    <Icon className="w-16 h-16 text-[#8DB7BA] mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#B84C4C] mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="py-32 relative overflow-hidden bg-gradient-to-b from-[#e8f4f4] to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#8DB7BA]/10"></div>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#8DB7BA] rounded-full animate-ripple"
              style={{ animationDelay: `${i * 0.5}s` }}
            ></div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#8DB7BA]/20 blur-3xl rounded-full transform animate-pulse"></div>

              {/* Substituindo <Cross /> pelo SVG customizado (menor) */}
              <svg
                fill="#8DB7BA"
                viewBox="-64 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#8DB7BA"
                className="w-28 h-28 mx-auto animate-float relative z-10"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M352 128h-96V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h96v224c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V256h96c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path>
                </g>
              </svg>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-[#B84C4C] observe-animation leading-tight">
              Sua Transformação 
              <span className="block text-[#8DB7BA] mt-4">Começa Agora</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 observe-animation leading-relaxed max-w-3xl mx-auto">
              Não espere mais para vivenciar uma experiência única de conexão espiritual. 
              Cada momento é uma oportunidade de transformação e renovação.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#8DB7BA] hover:bg-[#7a9ea1] text-white px-16 py-8 rounded-full flex items-center gap-4 text-3xl mx-auto transform hover:scale-105 transition-all shadow-2xl observe-animation group"
            >
              <MessageCircle className="w-10 h-10 group-hover:animate-bounce" />
              <span>Iniciar Agora</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
