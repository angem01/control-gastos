import NuevoPresupuesto from "./NuevoPresupuesto"

// eslint-disable-next-line react/prop-types
function Header({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidPresupuesto ? (
        <p>Control Presupuesto</p>
      ) : (
        <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      )}

      
    </header>
  )
}

export default Header