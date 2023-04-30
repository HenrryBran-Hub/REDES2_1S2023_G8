#-------------------------------------------------------------------------
#CREAMOS LA BASE DE DATOS 
#-------------------------------------------------------------------------
CREATE DATABASE Cerbero;
use Cerbero;

#-------------------------------------------------------------------------
#CREAMOS LAS TABLAS DE LA BASE DE DATOS
#-------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS Administrador (
	Id INT AUTO_INCREMENT,
    Nombres VARCHAR(100) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,    
    Telefono INT NOT NULL,
    Correo VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(500) NOT NULL,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Desarrollador (
	Id INT AUTO_INCREMENT,
    Nombres VARCHAR(100) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,    
    Carnet INT NOT NULL,
    Curso VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(500) NOT NULL,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Publica (
	Id INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(500) NOT NULL,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Economia (
	Id INT AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Cantidad DOUBLE NOT NULL,    
    Fecha DATE NOT NULL,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

#-------------------------------------------------------------------------
#INGRESAMOS LOS DATOS A LA BASE DE DATOS
#-------------------------------------------------------------------------

INSERT INTO 
Administrador (Nombres,Apellidos,Telefono,Correo,Descripcion)
VALUES
('Manuel Fernando', 'Lopez', 24578693, 'MF@gmail.com','Encargado de la administracion General de Cerberus'),
('Adriana','Gomez',35684759,'AG@hotmail.com','Encargado de la administracion del departamento de telecomunicacion'),
('Michael','Scott',36457851,'MS@outlook.com','Gerente de la sucursal de Scranton de la empresa Cerberus encargado de suministros de oficina');

INSERT INTO
Desarrollador (Nombres,Apellidos,Carnet,Curso,Descripcion)
VALUES
('Carlos Rene','Orantes Lara',201314172,'Redes 2','Balanceadores de Carga'),
('Carlos Agustin','Che Mijangos',201800624,'Redes 2','AWS EC2'),
('Gerson Aaron','Quina Folgar',201904157,'Redes 2','Dominio R53 DNS'),
('Henrry David','Bran Velasquez',201314439,'Redes 2','Encargado de Pagina web');

INSERT INTO 
Publica (Nombre, Descripcion)
VALUES
('Facebook', 'La red social más grande del mundo con más de 2.800 millones de usuarios activos mensuales.'),
('Notica de ultima hora','El 5G llega a más países y promete revolucionar las comunicaciones móviles'),
('Instagram', 'Plataforma de compartición de fotos y vídeos que cuenta con más de mil millones de usuarios activos mensuales.'),
('Twitter', 'Red social de microblogging que permite publicar mensajes de hasta 280 caracteres y que cuenta con más de 330 millones de usuarios activos mensuales.'),
('YouTube', 'Plataforma de compartición de vídeos que cuenta con más de 2.000 millones de usuarios activos mensuales.'),
('Actuales','El aumento del tráfico de Internet durante la pandemia impulsa la adopción de redes de fibra óptica'),
('LinkedIn', 'Red social orientada al mundo laboral que cuenta con más de 740 millones de usuarios registrados en todo el mundo.'),
('WhatsApp', 'Aplicación de mensajería instantánea propiedad de Facebook y que cuenta con más de 2.000 millones de usuarios activos mensuales.'),
('TikTok', 'Plataforma de vídeos cortos y divertidos que ha ganado gran popularidad en los últimos años, con más de 1.000 millones de usuarios activos mensuales.'),
('USA','Expertos alertan sobre el riesgo de ciberataques a infraestructuras críticas de las redes eléctricas y de agua'),
('Reddit', 'Plataforma de discusión y compartición de noticias que cuenta con más de 430 millones de usuarios activos mensuales.'),
('Pinterest', 'Red social que permite compartir imágenes y que cuenta con más de 450 millones de usuarios registrados.'),
('Snapchat', 'Aplicación de mensajería instantánea con un enfoque en el contenido efímero que ha ganado gran popularidad entre los jóvenes.');

INSERT INTO 
Economia (Nombre,Cantidad,Fecha)
VALUES
('Euro', 1.12, '2022-03-01'),
('Dolar', 1, '2022-03-01'),
('Cerbercoin', 5, '2022-03-01'),
('Euro', 1.1, '2022-04-01'),
('Dolar', 0.98, '2022-04-01'),
('Cerbercoin', 5.5, '2022-04-01'),
('Euro', 1.2, '2022-05-01'),
('Dolar', 1.05, '2022-05-01'),
('Cerbercoin', 6, '2022-05-01'),
('Euro', 1.3, '2022-06-01'),
('Dolar', 1.1, '2022-06-01'),
('Cerbercoin', 6.5, '2022-06-01'),
('Euro', 1.4, '2022-07-01'),
('Dolar', 1.15, '2022-07-01'),
('Cerbercoin', 7, '2022-07-01'),
('Euro', 1.5, '2022-08-01'),
('Dolar', 1.2, '2022-08-01'),
('Cerbercoin', 7.5, '2022-08-01'),
('Euro', 2.6, '2022-09-01'),
('Dolar', 1.25, '2022-09-01'),
('Cerbercoin', 6, '2022-09-01'),
('Euro', 2.7, '2022-10-01'),
('Dolar', 1.3, '2022-10-01'),
('Cerbercoin', 5.5, '2022-10-01'),
('Euro', 0.8, '2022-11-01'),
('Dolar', 0.35, '2022-11-01'),
('Cerbercoin', 5, '2022-11-01'),
('Euro', 1.9, '2022-12-01'),
('Dolar', 1.4, '2022-12-01'),
('Cerbercoin', 7, '2022-12-01'),
('Euro', 2, '2023-01-01'),
('Dolar', 1.45, '2023-01-01'),
('Cerbercoin', 8, '2023-01-01'),
('Euro', 3.1, '2023-02-01'),
('Dolar', 1.5, '2023-02-01'),
('Cerbercoin', 8.5, '2023-02-01'),
('Euro', 2.2, '2023-03-01'),
('Dolar', 1.55, '2023-03-01'),
('Cerbercoin', 7, '2023-03-01');

#-------------------------------------------------------------------------
#CONSULTAMOS LOS DATOS INGRESADOS A LA BASE DE DATOS
#-------------------------------------------------------------------------

SELECT *FROM Administrador;
SELECT *FROM Desarrollador;
SELECT *FROM Economia;
SELECT *FROM Publica;