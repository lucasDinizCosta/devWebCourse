import React from "react";

// Propaga os parametros de pai para filho
export function childrenWithProps(props){
    return React.Children.map(props.children, child => {   //Mapeia para todos os outros
        return React.cloneElement(child, {    //Funciona para 1 elemento só
            ...props, ...child.props
            // Substitui as propriedades clonadas do pai para
            // as que o filho já tem
        })
    })
}