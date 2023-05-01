Gimnasio

Integrantes:
Julián Ortiz
Santiago Castro
Jóse Rivillas
Jerónimo Aguirre

Backend: Spring


Frontend: React
src/main/valhalla

BD : Mysql
Archivo configuración: src/main/resources/application.properties

Aqui empieza el query para la base de datos
 
-- Antes de ejecutar el proyecto crear la base de datos con la siguiente linea:
create database valhalla;

-- Luego de ejecutar el proyecto, revisar que se hayan creado las tablas según las entidades
-- En caso de que se hayan creado, ejecutar los siguientes insert

-- insert para sedes
INSERT INTO `valhalla`.`sedes` (`ciudad`, `nombre`, `direccion`, `link_imagen`, `telefono`) VALUES
('Medellín', 'Centro', 'Cra 54', 'https://metropolitano.gal/wp-content/uploads/2022/12/gimnasiog-4.jpg', 123456789),
('Bogotá', 'Chapinero', 'Avenida 100', 'https://andro4all.com/hero/2022/03/Las-mejores-8-aplicaciones-de-rutinas-para-el-gimnasio-1.jpg?width=1200', 987654321),
('Cali', 'Palmaseca', 'Cra 87 # 98', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy81RnK1uszjgY3CjMP00bg5SSrJXBju2KVjJXCMrISR1_3iPvqlNZ_j-wy5Km6zW_o5A&usqp=CAU', 555444333);

-- Agregar aquí el resto de inserts
