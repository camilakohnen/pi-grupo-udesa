CREATE SCHEMA data;
USE data;

CREATE TABLE usuarios (
/* nombreColumna           TipodeDato          Restricciones */
id				  		   INT			        UNSIGNED PRIMARY KEY AUTO_INCREMENT,
mail                       VARCHAR(250) 		NOT NULL,
contrasenia				   VARCHAR(250) 		NOT NULL,
fecha					   DATE 				NOT NULL,
dni						   INT					NOT NULL,
fotoUsuario				   VARCHAR(250) 		NOT NULL,
createdAt 			       TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ,
updatedAt 			       TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt				   TIMESTAMP		    DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE productos (
/* nombreColumna           TipodeDato          Restricciones */
id				            INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuarios					INT					UNSIGNED,
fotoProducto				VARCHAR(250) 		NOT NULL,
nombreproducto				VARCHAR(250) 		NOT NULL,
descripcionProducto			VARCHAR(250) 		NOT NULL,
createdAt 			        TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ,
updatedAt 			        TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt					TIMESTAMP		    DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (idUsuarios) 	REFERENCES 			usuarios(id)

);

CREATE TABLE comentarios (
/* nombreColumna           TipodeDato          Restricciones */
id							INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idProducto					INT					UNSIGNED,
idUsuario					INT					UNSIGNED,
textoComentario				VARCHAR(250) 		NOT NULL,
createdAt 			        TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ,
updatedAt 			        TIMESTAMP 		    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt					TIMESTAMP		    DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (idUsuario) 	REFERENCES 			usuarios(id),
FOREIGN KEY (idProducto) 	REFERENCES 			productos(id)
);


/*  USUARIOS  */


INSERT INTO usuarios VALUES (DEFAULT, "eduardo@example.com", "contraseña1", "1990-01-01", 12345678, "Eduardo.jpeg", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios VALUES (DEFAULT, "maria@example.com", "contraseña2", "1991-02-02", 23456789, "Maria.jpeg", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios VALUES (DEFAULT, "agustin@example.com", "contraseña3", "1992-03-03", 34567890, "Agustin.jpeg", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios VALUES (DEFAULT, "marcelo@example.com", "contraseña4", "1993-04-04", 45678901, "Marcelo.jpeg", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO usuarios VALUES (DEFAULT, "camila@example.com", "contraseña5", "1994-05-05", 56789012, "Camila.jpeg", DEFAULT, DEFAULT, DEFAULT);


/*  PRODUCTOS  */


INSERT INTO productos VALUES (DEFAULT, 2, "nescafegold.jpg", "Mezcla de café premium", "Nuestra mezcla signature de granos de café, perfecta para cualquier amante del café.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 3, "tasaconlogo.jpg", "Taza de café con logo", "Disfruta de tu bebida favorita en esta taza elegante con nuestro logo.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 4, "remera.jpg", "Camiseta de café", "Lleva tu amor por el café en tu manga con esta camiseta cómoda.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 5, "adhesivodecafe.jpg", "Adhesivo de café", "Decora tu portátil o botella de agua con este pegatina genial.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 5, "maquinaporgoteo.jpg", "Máquina de café de goteo", "Prepara la taza perfecta de café con esta máquina de café de goteo.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 2, "calentador.jpg", "Calentador de taza de café", "Mantén tu café caliente mientras trabajas con este calentador de taza de café.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 3, "delantal.jpg", "Delantal de café", "Mantente limpio mientras preparas café con este delantal de barista.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 4, "molinillo.avif", "Molinillo de café manual", "Tritura tus propios granos de café con este molinillo de café manual.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 1, "bolsacafe.jpg", "Bolsa de tela de café", "Lleva tus compras o portátil en esta bolsa de tela elegante.", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos VALUES (DEFAULT, 1, "prensafrancesa.jpg", "Prensa francesa de café", "Prepara una taza rica y sabrosa de café con esta prensa francesa.", DEFAULT, DEFAULT, DEFAULT);

/*  COMENTARIOS  */

INSERT INTO comentarios VALUES (DEFAULT, 1, 1, "Esta mezcla de café es simplemente increíble. Tiene un sabor fuerte y rico que me encanta. ¡La recomiendo encarecidamente!", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, 2, 3, "Esta camiseta de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y se siente cómoda de usar. ¡Gracias!", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, 3, 2, "Esta taza de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y el logo se ve genial. ¡Gracias!", DEFAULT, DEFAULT, DEFAULT);





