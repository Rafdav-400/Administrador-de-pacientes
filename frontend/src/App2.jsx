import React from "react";
import FormMasc from "./components/FormMasc";
import { TarjetaDePaciente } from "./components/TarjetaDePaciente";

export const App2 = () => {
    return (
        <div>
            <div>
                <h1 className="w-2/2 text-5xl bg-orange-400 text-white p-6 font-bold text-center">
                    Administrador de pacientes
                </h1>
            </div>
            <div className="lg:flex">
                <div className="md:1/2 lg:2/5">
                    <h2 className="text-4xl bg-orange-300 p-4 text-center border-4 mx-5 my-3">
                        Administrador de pacientes
                    </h2>
                  <FormMasc />
                </div>
                <div className="md:1/2 lg:3/5 w-full">
                    <h2 className="text-4xl bg-orange-300 p-4 text-center border-4 mx-5 my-3">
                        Listado de pacientes
                    </h2>
                  <TarjetaDePaciente />
                </div>
            </div>
        </div>
    );
};
