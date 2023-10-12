import React, { useState } from "react";
import { Error } from "./Error";

const FormMasc = () => {
    //De aquí se va a escribir el codigo
    const [duenyoNombre, setDuenyoNombre] = useState("");
    const [mascotaNombre, setMascotaNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [error, setError] = useState(false)    

    //Crear la función ponerNombreAlDuenyo
    const ponerNombreAlDuenyo = (e) => {
        setDuenyoNombre(e.target.value);
    };
    const ponerleNombreALaMascota = (e) => {
        setMascotaNombre(e.target.value);
    };
    const ponerLaFecha = (e) => {
        setFecha(e.target.value);
    };
    const ponerLaHora = (e) => {
        setHora(e.target.value);
    };
    const ponerLaDescripcion = (e) => {
        setDescripcion(e.target.value);
    };
    const enviarFormulario = (e) => {
        e.preventDefault();
        console.log("Enviando formulario...");
        if (
            [duenyoNombre, mascotaNombre, fecha, hora, descripcion].includes("")
        ) {
            setError(true)
        } else {
            setError(false)
        }
    };

    return (
        <div className="border-4 mx-5 my-3">
            {
                error ? <Error /> : ""
            }
            <form 
                onSubmit={enviarFormulario} 
                className="bg-orange-200 px-3 shadow-xl"
            >
                <label
                    className="w-auto font-semibold text-xl px-2 my-4 uppercase"
                    htmlFor="duenyoNombre"
                >
                    Nombre del dueño:{" "}
                </label>
                <input
                    className="border rounded-md px-2 mb-5 py-1 w-full"
                    type="text"
                    id="duenyoNombre"
                    ////name={duenyoNombre}
                    onChange={ponerNombreAlDuenyo}
                />
                <br />
                <label
                    className="w-auto font-semibold text-xl px-2 my-4 uppercase"
                    htmlFor="mascotaNombre"
                >
                    Nombre de la mascota:{" "}
                </label>
                <input
                    className="border rounded-md px-2 mb-5 py-1 w-full"
                    type="text"
                    id="mascotaNombre"
                    onChange={ponerleNombreALaMascota}
                />
                <br />
                <label className="text-xl font-semibold px-2 my-4 uppercase" htmlFor="fecha">
                    Fecha de ingreso:{" "}
                </label>
                <input
                    type="date"
                    name="fecha"
                    id="fecha"
                    onChange={ponerLaFecha}
                    className="px-2 mb-5 py-1 w-full"
                />
                <br />
                <label className="text-xl font-semibold px-2 my-4 uppercase" htmlFor="hora">
                    Hora de ingreso:{" "}
                </label>
                <input
                    type="time"
                    name="hora"
                    id="hora"
                    onChange={ponerLaHora}
                    className="px-2 mb-5 py-1 w-full"
                />
                <br />
                <label className="text-xl font-semibold px-2 my-4 uppercase" htmlFor="descripcion">
                    Síntomas:{" "}
                </label>
                <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="40"
                    rows="4"
                    onChange={ponerLaDescripcion}
                    className="px-2 mb-5 py-1 w-full"
                ></textarea>
                <br />
                <button className="text-2xl font-bold bg-orange-100 hover:bg-orange-400 transition-colors text-center uppercase rounded-lg px-2 mb-5 py-3 w-full">
                    Agregar mascota
                </button>
            </form>
        </div>
    );
};

export default FormMasc;
