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

-- Insert para Roles
INSERT INTO `valhalla`.`roles` (`id`, `name`) VALUES ('1', 'CLIENTE');
INSERT INTO `valhalla`.`roles` (`id`, `name`) VALUES ('2', 'PROFESOR');
INSERT INTO `valhalla`.`roles` (`id`, `name`) VALUES ('3', 'ADMINISTRADOR');

-- Insert para sexos
INSERT INTO `valhalla`.`sexos` (`id`, `name`) VALUES ('1', 'FEMENINO');
INSERT INTO `valhalla`.`sexos` (`id`, `name`) VALUES ('2', 'MASCULINO');

-- Insert para usuarios
INSERT INTO `valhalla`.`user` (`id`, `cedula`, `contrasena`, `correo`, `fecha_nacimiento`, `nombre`, `telefono`, `rol_id`, `sexo_id`) VALUES ('1', '1000', '123', 'jose@email.com', '2000-11-11 12:00:00', 'Jose', '3000000000', '2', '1');

-- Insert para clases
INSERT INTO `valhalla`.`clases` (`id_clases`, `capacidad`, `descripcion`, `fecha_fin`, `fecha_inicio`, `link_imagen`, `nombre`, `id_profesor`, `id_sede`) VALUES ('1', '20', 'Clase de Zumba con el Ferxxo', '2023/4/21 12:00', '2023/4/21 12:00', 'https://azsstatic.com/1200/conversions/zumba-default.jpg', 'Zumba', '1', '1');

-- insert para prizes
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('1', 'Juego de pesas');
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('2', 'Mancuernas de 10kg');
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('3', '-10% en mensualidad');
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('4', '-20% en mensualidad');
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('5', 'Termo');
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('6', 'Pre entreno');
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('7', 'Medias adidas');
INSERT INTO `valhalla`.`prizes` (`id_prize`, `description`) VALUES ('8', 'Sudadera nike');

-- Agregar aquí el resto de inserts
