import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Suggestions } from '../components/Suggestions'


//organizo pequeño grupos de prueba (recibe como primer parametro una descripción y como segundo una función anónima)
describe('funciones dentro del componente Suggestions', ()=>{
    // Mocking "burlando" the onClickOutside function
    const mockOnClickOutside = jest.fn();

//organizo pequeño grupos de prueba (recibe como primer parametro una descripción y como segundo una función anónima)
    test("renderiza el componente Suggestions con sugerencias", () => {
        const results = [
        { id: 1, title: "Opción 1" },
        { id: 2, title: "Opción 2" },
        { id: 3, title: "Opción 3" },
    ];

    render(<Suggestions results={results} onClickOutside={mockOnClickOutside} />);

    // Verificamos que las sugerencias se rendericen correctamente
    expect(screen.getByText("Opción 1")).toBeInTheDocument();
    expect(screen.getByText("Opción 2")).toBeInTheDocument();
    expect(screen.getByText("Opción 3")).toBeInTheDocument();
    });

    test("renderiza 'No hay sugerencias disponibles' cuando no hay sugerencias", () => {
    const results = [];

    render(<Suggestions results={results} onClickOutside={mockOnClickOutside} />);

    // Verificamos que se renderice el mensaje 'No hay sugerencias disponibles'
    expect(screen.getByText("No hay sugerencias disponibles")).toBeInTheDocument();
    });

    test("llama a onClickOutside al hacer clic fuera de las sugerencias", () => {
    const results = [{ id: 1, title: "Opción 1" }];
    render(<Suggestions results={results} onClickOutside={mockOnClickOutside} />);

    // Hacemos clic fuera de las sugerencias
    fireEvent.click(document);

    // Verificamos que onClickOutside haya sido llamada
    expect(mockOnClickOutside).toHaveBeenCalled();
});






});
