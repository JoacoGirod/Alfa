# Proyecto Taller Mecanico.

- Este proyecto tiene el objetivo de repasar los siguientes temas:
1) Uso de Git
2) Repaso de funciones, arrow functions y objetos literales

## Contexto
Estamos desarrollando el sistema de software de un taller mecanico que desea modelar las reparaciones de los autos.

## Consignas
- Cada paso a resolver de esta ejercitacion debe ser un commit.
- Recorda utilizar buenas practicas para hacer un commit subiendo codigo que funcione y dejando un mensaje descriptivo de la consigna realizada.

1) Modelar los autos en el sistema. Un auto tiene marca, modelo, patente y daños.
2) Modelar los mecánicos en el sistema. Los mismos tienen nombre, legajo y reparaciones (que son los daños de los autos).

- ¿Cómo modelarias este sistema?
Tene en consideracion que los daños pueden ser modelados como **Strings**, ejemplo un volante y rueda daniada se representaria de la siguiente forma **["volante","rueda"]*

3) El taller desea modelar dos funcionalidades más. 
La funcionalidad **listarLegajos** que RETORNA los legajos de los mecanicos.
La funcionalidad **listarPatentes** que RETORNA las patentes de los autos.

 - Llego el momento de analizar el código. ¿Qué sucede si el taller desea agregar muchas funcionalidades más, nuestro código esta preparado para eso?, ¿Hay algo que este representando el taller?. --

- El taller esta interesado en poder hacer que todos los autos sean reparados por todos los mecanicos. Para esto vamos a dividir este gran problema en problemas mas pequenios

4) Desarrolla la funcion **repararAuto**  que reciba un auto y un mecanico y retorne el auto sin los daños que sabe reparar el mecanico.

6) Desarrolla la funcion repararAutoPorMecanicos que reciba un auto y una lista de mecanicos. Esta funcion retorna el auto habiendo sido reparado por todos los mecanicos.

7) Desarrolla la funcion **repararTodosLosAutos** que reciba una lista con todos los autos y otra lista con todos los mecanicos. Esta funcion hace que cada auto sea reparado por todos los mecanicos.

