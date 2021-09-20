# Tools React

This repository will be used to test different react tools.

## Hooks

### useReducer

This hook receives the prev state and an action object, this object
has a type and a payload.

The function must not mutate state, use (map, filter, reducer, etc...)
With the payload you can send data to the reducer

The reducer needs a pure function, no random values

Este hook debe ser una función pura ( una función que opera utilizando los párametros de entrada, sin recurrir o afectar a ningún elemento fuera de ellas)

- Dado unos pármetros de entrada de identico valor, la función siempre devolverá el mismo resultado
- la función no debe alterar ningun valor fuera de ella

- Un reducer simpre retornará el mismo estado si se dispara la misma acción con el mismo payload.
- Los párametros de entrada no debe ser mutados (action, payload). Utilizar funciones que no modifiquen el valor original,
  (filter, find, map, reduce)

#### Cuándo utilizar el use reducer

- Cuando se tiene una lógica completa
- Cuando el próximo estado depende del anterior
- Cuando sobre un estado se realizan muchas acciones distintas para actualizarlo
