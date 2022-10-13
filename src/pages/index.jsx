import Navegador from '../components/Navegador'

export default function Home() {
  return (
  <div style={{
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '100vh'
   }}>
   <Navegador texto="Estiloso" destino= '/estiloso'></Navegador>  
   <Navegador texto="Exemplo" destino= '/exemplo' cor="#9400d3"></Navegador>  
   <Navegador texto="Jsx" destino= '/jsx' cor='crimson'></Navegador>
   <Navegador texto="Navagação #01" destino= '/navegacao' cor='green'></Navegador>
   <Navegador texto="Navagação #02" destino= '/clientes/SP/123' cor='blue'></Navegador>
   <Navegador texto="Componente com Estado" destino= '/estado' cor='#999941'></Navegador>
   <Navegador texto="Integração com API #01" destino= '/integracao_1' cor='#b45f6e'></Navegador>
   <Navegador texto="Conteúdo Estático" destino= '/estatico' cor='#ff6347'></Navegador>

  </div>
   )
}
