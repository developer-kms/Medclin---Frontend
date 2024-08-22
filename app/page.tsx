// Página Principal
'use client';

import Link from 'next/link';
import Button from './components/Button'
import Head from 'next/head';

export default function Home() {

  const handleClick = () => {

    //alert("Botão Clicado! "); -> Exibir um Alerta

  };

  return (
    
  <main>
        
    <Head>
      {/*Header - Cabeçalho*/}

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>

    </Head>

    <body>
      {/*Body - Corpo*/}

      

    <nav>
      {/* Logo */}
      <img src="../" alt="Logo" />
      <a className="p-4" href="./pages/Map">MEDCLIN</a>

      <button className="btn glass"><a href="/pages/Map" className='p-4'>MAPA</a></button>

      <div className='justify-end flex items-end mx-auto'>
        {/* Botão de Mapa */}
        <div className="p-1 py-1">
        <Button name="Mapa" onClick={handleClick} href="./pages/Map"/>
        </div>

        {/* Botão de Clinicas */}
        <div className="p-1 py-1">
        <Button name="Clínicas" onClick={handleClick} href="./pages/Map"/>
        </div>

        {/* Botão de Cartão */}
        <div className="p-1 py-1">
        <Button name="Cartão" onClick={handleClick} href="./pages/Map"/>
        </div>  

      </div>
    </nav> 
          


          {/* <div className="w-[1920px] h-[2473.33px] relative bg-[#fbfbfd]">
          <div className="w-[640px] h-[325.33px] left-[321.33px] top-[1082.67px] absolute shadow">
          <div className="w-[640px] h-[325.33px] left-0 top-0 absolute bg-gradient-to-b from-[#167ace] to-[#07508d] rounded-[20px] shadow border border-black/5" />
          <div className="w-[100px] h-[100px] left-[22px] top-[28.20px] absolute bg-[#fbfbfd] rounded-[120px]" />
          <div className="left-[408px] top-[40px] absolute text-white text-[26.67px] font-bold font-['Inter']">Medcard</div>
          <div className="left-[132px] top-[37.33px] absolute text-white text-xl font-bold font-['Inter']"># User12345</div>
          <div className="left-[132px] top-[104px] absolute text-white text-xl font-bold font-['Inter']">Registro Medclin</div>
          <div className="w-[290px] h-[45.55px] left-[132px] top-[128px] absolute text-white text-[26.67px] font-bold font-['Inter']">000.000.000-00</div>
          <div className="w-[53.33px] h-[53.33px] left-[45.33px] top-[52px] absolute" />
          <div className="w-[60px] h-[60px] left-[556px] top-[26.67px] absolute justify-center items-center inline-flex">
          <img className="w-[60px] h-[60px]" src="https://via.placeholder.com/60x60" />
          </div>
          </div>
          <div className="w-[1921.33px] h-[476.83px] left-0 top-[1479.17px] absolute">
          <div className="w-[1921.33px] h-[476.83px] left-0 top-0 absolute bg-[#c1c1c1]" />
          <div className="w-[960px] h-[213.23px] left-[480px] top-[132.39px] absolute text-justify text-[#092126] text-[40px] font-light font-['Inter'] leading-[39.20px]">A medclin está sempre proporcionando ao cliente, uma maneira prática e ágil de encontrar a melhor clínica para o seu problema, evitando toda a parte burocrática da busca e agendamento por uma clínica ideal. Deixa que nós resolvemos isso por você!</div>
          </div>
          <div className="w-[1920px] h-[652px] left-0 top-[108px] absolute">
          <div className="w-[1920px] h-[652px] left-0 top-0 absolute bg-[#012340]" />
          <div className="w-[714.17px] h-[169.33px] left-[159.89px] top-[217.33px] absolute text-justify text-[#fbfbfd] text-[28px] font-normal font-['Inter'] leading-[39.20px]">O aplicativo MedClin é voltado para a pesquisa rápida e efetiva de clínicas e profissionais de saúde.<br/>Sinta-se a vontade para navegar e utilizar as funções projetadas para tal.</div>
          <div className="w-[714.17px] h-[73.33px] left-[159.89px] top-[109.33px] absolute text-justify text-[#fbfbfd] text-[40px] font-semibold font-['Inter'] leading-[39.20px]">Medclin ajudando você a encontrar sua clínica ideal</div>
          </div>
          <div className="w-[1600px] h-[325.33px] left-[157.33px] top-[2032px] absolute">
          <div className="w-[1600px] h-[325.33px] left-0 top-0 absolute bg-[#167ace] rounded-[33.33px] shadow" />
          <div className="w-[800px] h-[73.33px] left-[41.33px] top-[210.67px] absolute text-justify text-[#fbfbfd] text-[33.33px] font-medium font-['Inter'] leading-10">A medclin já auxiliou milhares de pessoas na busca pela clínica ideal!</div>
          <div className="w-[800px] h-[73.33px] left-[41.33px] top-[121.33px] absolute text-justify text-[#fbfbfd] text-[33.33px] font-medium font-['Inter'] leading-[39.20px]">Clique agora em cadastre-se e nos ajude a poupar o seu tempo!!</div>
          <div className="w-[800px] h-[73.33px] left-[41.33px] top-[32px] absolute text-justify text-[#fbfbfd] text-[40px] font-semibold font-['Inter'] leading-[39.20px]">Está na hora da gente te ajudar também!!</div>
          <div className="w-72 h-[81.33px] left-[1074.67px] top-[44px] absolute">
          <div className="w-72 h-[81.33px] left-0 top-0 absolute bg-[#167ace] rounded-[26.67px] shadow border-2 border-[#fbfbfd]" />
          <div className="left-[22.67px] top-[21.33px] absolute text-justify text-[#fbfbfd] text-[40px] font-semibold font-['Inter'] leading-[39.20px]">Cadastre-se</div>
          </div>
          <div className="left-[1193.33px] top-[142.67px] absolute text-justify text-[#fbfbfd] text-[40px] font-semibold font-['Inter'] leading-[39.20px]">ou</div>
          <div className="w-[66.67px] h-[66.67px] left-[1110.67px] top-[201.33px] absolute shadow" />
          <div className="w-[66.67px] h-[66.67px] left-[1258.67px] top-[201.33px] absolute shadow" />
          <div className="w-[133.33px] h-[0px] left-[1041.33px] top-[162.67px] absolute border border-[#fbfbfd]"></div>
          <div className="w-[133.33px] h-[0px] left-[1256px] top-[162.67px] absolute border border-[#fbfbfd]"></div>
          </div>
          <div className="left-[901.33px] top-[838.79px] absolute text-justify text-[#092126] text-[53.33px] font-bold font-['Inter'] leading-9">Medcard</div>
          <div className="w-[1280px] left-[321.33px] top-[922.67px] absolute text-center"><span className="text-[#092126] text-[33.33px] font-normal font-['Inter'] leading-9">O </span><span className="text-[#092126] text-[33.33px] font-normal font-['Inter'] leading-9">Medcard</span><span className="text-[#092126] text-[33.33px] font-normal font-['Inter'] leading-9"> é um cartão voltado para melhor lhe atender e auxiliar. Ao possuir o cartão, é possível utilizar benefícios presentes no seu respectivo plano. <br/>Entre os benefícios, pode-se destacar:</span></div>
          <div className="left-[994.67px] top-[1116px] absolute text-black text-[26.67px] font-normal font-['Inter'] leading-9">Descontos em medicamentos</div>
          <div className="left-[994.67px] top-[1158.55px] absolute"><span className="text-black text-[26.67px] font-normal font-['Inter'] leading-9">Desconto na consulta com parceiros </span><span className="text-black text-[26.67px] font-normal font-['Inter'] leading-9">Medclin</span></div>
          <div className="left-[994.67px] top-[1201.21px] absolute text-black text-[26.67px] font-normal font-['Inter'] leading-9">Desconto em cirurgia, exames e internações</div>
          <div className="left-[994.67px] top-[1245.21px] absolute"><span className="text-black text-[26.67px] font-normal font-['Inter'] leading-9">Descontos em parceiros </span><span className="text-black text-[26.67px] font-normal font-['Inter'] leading-9">Medclin</span></div>
          <div className="w-80 h-[66.67px] left-[1280px] top-[1341.33px] absolute">
          <div className="w-80 h-[66.67px] left-0 top-0 absolute bg-[#167ace] rounded-[20px] shadow" />
          <div className="left-[68px] top-[14.67px] absolute text-white text-[26.67px] font-bold font-['Inter'] leading-9">Ver meu perfil</div>
          </div>
          <div className="w-[498.32px] h-[65.33px] left-[186.67px] top-[585.33px] absolute">
          <div className="w-[498.32px] h-[65.33px] left-0 top-0 absolute bg-[#fbfbfd] rounded-[32.67px] shadow border border-black/5" />
          <div className="w-[241.71px] left-[42.64px] top-[17.33px] absolute text-black text-xl font-normal font-['Jost']">Procurar por clínicas...</div>
          <img className="w-[45.30px] h-[45.33px] left-[426.37px] top-[9.33px] absolute" src="https://via.placeholder.com/45x45" />
          </div>
          <div className="w-[1920px] h-10 left-[-2.67px] top-[2433.33px] absolute">
          <div className="w-[1920px] h-10 left-0 top-0 absolute bg-[#012340]" />
          <div className="left-[742.67px] top-0 absolute text-justify text-[#fbfbfd] text-2xl font-light font-['Inter'] leading-[39.20px]">Copyright © The Medclin Project 2024</div>
          </div>
          <div className="w-[798.11px] h-[433.33px] left-[1017.33px] top-[205.33px] absolute justify-center items-center inline-flex">
          <img className="w-[798.11px] h-[433.33px] rounded-[13.33px] border-2 border-[#defffb]" src="https://via.placeholder.com/798x433" />
          </div>
          <div className="w-[1920px] h-[108px] left-0 top-0 absolute">
          <div className="w-[1920px] h-[108px] left-0 top-0 absolute bg-[#012340]" />
          <div className="left-[518.67px] top-[30.67px] absolute text-white text-[33.33px] font-normal font-['Jost']">Home</div>
          <div className="left-[346.67px] top-[30.67px] absolute text-white text-[33.33px] font-normal font-['Jost']">Medclin</div>
          <div className="left-[666.67px] top-[30.67px] absolute text-white text-[33.33px] font-normal font-['Jost']">Clínicas</div>
          <div className="left-[844px] top-[30.67px] absolute text-white text-[33.33px] font-normal font-['Jost']">Perfil</div>
          <div className="left-[1313.33px] top-[30.67px] absolute text-white text-[33.33px] font-normal font-['Jost']">Você atua na área de Saúde?</div>
          <div className="left-[1156px] top-[30.67px] absolute text-white text-[33.33px] font-normal font-['Jost']">Entrar</div>
          <div className="w-[66.67px] h-[66.67px] left-[210.67px] top-[21.33px] absolute justify-center items-center inline-flex">
          <img className="w-[66.67px] h-[66.67px]" src="https://via.placeholder.com/67x67" />
          </div>
          <div className="w-[66.67px] h-[66.67px] left-[45.33px] top-[21.33px] absolute bg-black/0" />
          </div>
          <div className="w-10 h-10 left-[1134.67px] top-[836px] absolute justify-center items-center inline-flex">
          <div className="w-10 h-10 relative flex-col justify-start items-start flex" />
          </div>
          </div> */}
  </body>
</main>

  );
};
