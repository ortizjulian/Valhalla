Gimnasio

Integrantes:
Julián Ortiz
Santiago Castro
Jose Rivillas
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

-- insert para planes
INSERT INTO `valhalla`.`planes` (`id_planes`, `descripcion`, `nombre`, `precio`) VALUES ('1', 'Nuestro plan básico, que te permitirá acceder a la sede de tu preferencia.', 'Guerrero', '59900');
INSERT INTO `valhalla`.`planes` (`id_planes`, `descripcion`, `nombre`, `precio`) VALUES ('2', 'Nuestro plan Valkiria, te permitirá acceder a lo mejor de su rango.', 'Valkiria', '89900');
INSERT INTO `valhalla`.`planes` (`id_planes`, `descripcion`, `nombre`, `precio`) VALUES ('3', 'Nuestro plan Odín, es el más top. Te permite acceder a todos los beneficios posibles.', 'Odín', '99900');

-- insert para beneficios
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('1', 'Una sola sede', 'Primero');
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('2', 'Todas las sedes', 'Segundo');
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('3', 'Plan Personalizado', 'Tercero');
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('4', 'Acceso a la Plataforma', 'Cuarto');
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('5', 'Cita con Deportólogo', 'Quinto');
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('6', 'Acceso a los retos', 'Sexto');
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('7', 'Cita con Nutricionista', 'Séptimo');
INSERT INTO `valhalla`.`beneficios` (`id_beneficios`, `descripcion`, `nombre`) VALUES ('8', 'Clases Premium', 'Octavo');

-- insert beneficiosxplan
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('1', '1');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('3', '1');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('2', '1');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('2', '2');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('3', '2');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('4', '2');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('5', '2');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('6', '2');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('2', '3');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('3', '3');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('4', '3');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('5', '3');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('6', '3');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('7', '3');
INSERT INTO `valhalla`.`beneficios_x_plan` (`id_beneficio`, `id_plan`) VALUES ('8', '3');