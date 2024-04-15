const data = {
    usuario: {
            nombre: "Camila",
            mail: "camila5@example.com",
            contraseña: "contraseña5",
            fechaNacimiento: "1994-05-05",
            dni: "56789012",
            fotoPerfil: "../images/usuarios/Camila.jpeg"
    },
    productos: [
            {
            id : 1,
            nombre: "Mezcla de café premium",
            imagen: "../images/products/nescafegold.jpg",
            descripcion: "Nuestra mezcla signature de granos de café, perfecta para cualquier amante del café.",
            comentarios: [
                {
                  usuario: "Eduardo",
                  foto: "../images/usuarios/Eduardo.jpeg",
                  comentario: "Esta mezcla de café es simplemente increíble. Tiene un sabor fuerte y rico que me encanta. ¡La recomiendo encarecidamente!",
                },
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Me encanta el aroma y el sabor de esta mezcla de café. Es perfecta para tomar por la mañana. ¡Gracias por una gran experiencia de compra!",
                },
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Este café es simplemente delicioso. Tiene un sabor suave y afrutado que es perfecto para empezar el día. ¡Lo recomiendo encarecidamente!",
                }
              ]
          },
    
          {
            id : 2,
            nombre: "Taza de café con logo",
            imagen: "../images/products/tasaconlogo.jpg",
            descripcion: "Disfruta de tu bebida favorita en esta taza elegante con nuestro logo.",
            comentarios: [
                {
                  usuario: "Marcelo",
                  foto: "../images/usuarios/Marcelo.jpeg",
                  comentario: "Esta taza de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y el logo se ve genial. ¡Gracias!",
                },
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Me encanta esta taza de café. Es perfecta para tomar mi café por la mañana. La calidad es excelente y el logo se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Esta taza de café es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y el logo se ve genial. ¡La recomiendo encarecidamente!",
                }
              ]
          },
    
          {
            id : 3,
            nombre: "Camiseta de café",
            imagen: "../images/products/remera.jpg",
            descripcion: "Lleva tu amor por el café en tu manga con esta camiseta cómoda.",
            comentarios: [
                {
                  usuario: "Camila",
                  foto: "../images/usuarios/Camila.jpeg",
                  comentario: "Esta camiseta de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y se siente cómoda de usar. ¡Gracias!",
                },
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Me encanta esta camiseta de café. Es perfecta para usar en el trabajo o en casa. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Marcelo",
                  foto: "../images/usuarios/Marcelo.jpeg",
                  comentario: "Esta camiseta de café es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y se siente cómoda de usar. ¡La recomiendo encarecidamente!",
                }
              ]
          },
    
          {
            id : 4,
            nombre: "Adhesivo de café",
            imagen: "../images/products/adhesivodecafe.jpg",
            descripcion: "Decora tu portátil o botella de agua con este pegatina genial.",
            comentarios: [
                {
                  usuario: "Eduardo",
                  foto: "../images/usuarios/Eduardo.jpeg",
                  comentario: "Este adhesivo de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y se ve genial en mi portátil. ¡Gracias!",
                },
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Me encanta este adhesivo de café. Es perfecto para decorar mi portátil o mi botella de agua. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Camila",
                  foto: "../images/usuarios/Camila.jpeg",
                  comentario: "Este adhesivo de café es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y se ve genial en mi portátil. ¡La recomiendo encarecidamente!",
                }
              ]
          },
    
          {        
            id : 5,
            nombre: "Máquina de café de goteo",
            imagen: "../images/products/maquinaporgoteo.jpg",
            descripcion: "Prepara la taza perfecta de café con esta máquina de café de goteo.",
            comentarios: [
                {
                  usuario: "Marcelo",
                  foto: "../images/usuarios/Marcelo.jpeg",
                  comentario: "Esta máquina de café de goteo es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecta para hacer café en casa. ¡Gracias!",
                },
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Me encanta esta máquina de café de goteo. Es perfecta para hacer café en casa o en el trabajo. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Esta máquina de café de goteo es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecta para hacer café en casa o en el trabajo. ¡La recomiendo encarecidamente!",
                }
            
              ]
          },
    
          {
            id : 6,
            nombre: "Calentador de taza de café",
            imagen: "../images/products/calentador.jpg",
            descripcion: "Mantén tu café caliente mientras trabajas con este calentador de taza de café.",
            comentarios: [
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Este calentador de taza de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecto para mantener mi café caliente. ¡Gracias!",
                },
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Me encanta este calentador de taza de café. Es perfecto para mantener mi café caliente en el trabajoo en casa. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Eduardo",
                  foto: "../images/usuarios/Eduardo.jpeg",
                  comentario: "Este calentador de taza de café es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecto para mantener mi café caliente. ¡La recomiendo encarecidamente!",
                }
              ]
          },
    
          {
            id : 7,
            nombre: "Delantal de café",
            imagen: "../images/products/delantal.jpg",
            descripcion: "Mantente limpio mientras preparas café con este delantal de barista.",
            comentarios: [
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Este delantal de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecto para cocinar. ¡Gracias!",
                },
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Me encanta este delantal de café. Es perfecto para cocinar o hornear en casa. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Camila",
                  foto: "../images/usuarios/Camila.jpeg",
                  comentario: "Este delantal de café es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecto para cocinar. ¡La recomiendo encarecidamente!",
                }
              ]
          },
    
          {
            id : 8,
            nombre: "Molinillo de café manual",
            imagen: "../images/products/molinillo.avif",
            descripcion: "Tritura tus propios granos de café con este molinillo de café manual.",
            comentarios: [
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Este molinillo de café manual es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecto para moler mis propios granos de café. ¡Gracias!"
                },
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Me encanta este molinillo de café manual. Es perfecto para moler mis propios granos de café en casa. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Camila",
                  foto: "../images/usuarios/Camila.jpeg",
                  comentario: "Este molinillo de café manual es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecto para moler mis propios granos de café. ¡La recomiendo encarecidamente!"
                }
              ]
          },
    
          {
            id : 9,
            nombre: "Bolsa de tela de café",
            imagen: "../images/products/bolsacafe.jpg",
            descripcion: "Lleva tus compras o portátil en esta bolsa de tela elegante.",
            comentarios: [
                {
                  usuario: "Eduardo",
                  foto: "../images/usuarios/Eduardo.jpeg",
                  comentario: "Esta bolsa de tela de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecta para llevar mis cosas. ¡Gracias!",
                },
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Me encanta esta bolsa de tela de café. Es perfecta para llevar mis cosas al trabajo o a casa. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Marcelo",
                  foto: "../images/usuarios/Marcelo.jpeg",
                  comentario: "Esta bolsa de tela de café es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecta para llevar mis cosas. ¡La recomiendo encarecidamente!",
                }
              ]
          },
    
          {
            id : 10,
            nombre: "Prensa francesa de café",
            imagen: "../images/products/prensafrancesa.jpg",
            descripcion: "Prepara una taza rica y sabrosa de café con esta prensa francesa.",
            comentarios: [
                {
                  usuario: "Maria",
                  foto: "../images/usuarios/Maria.jpeg",
                  comentario: "Esta prensa francesa de café es genial. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecta para hacer café en casa. ¡Gracias!",
                },
                {
                  usuario: "Agustin",
                  foto: "../images/usuarios/Agustin.jpeg",
                  comentario: "Me encanta esta prensa francesa de café. Es perfecta para hacer café en casa o en el trabajo. La calidad es excelente y se ve genial. ¡La recomiendo!",
                },
                {
                  usuario: "Marcelo",
                  foto: "../images/usuarios/Marcelo.jpeg",
                  comentario: "Esta prensa francesa de café es simplemente increíble. Tiene un diseño moderno y elegante que me encanta. La calidad es excelente y es perfecta para hacer café en casa o en el trabajo. ¡La recomiendo encarecidamente!",
                }
              ]
          }
        ],
        filtrarID : function(id){
            let filtrado = [];
            for (let i = 0; i < this.lista.length; i++) {
                if (id==this.lista[i].id){
                    filtrado.push(this.lista[i])
                }
                
            }
        }
}

module.exports= data