import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

// eslint-disable-next-line react/prop-types
function Header({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
        gastos={gastos}
        presupuesto={presupuesto}
        />
      ) : (
        <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        pan="prueba"
      />
      )}

      
    </header>
  )
}

export default Header
