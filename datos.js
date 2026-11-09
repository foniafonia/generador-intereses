var CFG={
pajaros:{
 imprimir:[
  {k:'sec',img:'sec-3-pollito',t:'Secuencia del huevo al vuelo',d:'Cuatro viñetas para recortar y ordenar, con una tira numerada donde pegarlas.',w:'orden temporal, narración (primero, luego, al final), vocabulario.'},
  {k:'mem',img:'ave-gorrion',t:'Memory de aves de aquí',d:'Gorrión, paloma, gaviota, golondrina y cigüeña. Cartas con dibujo y cartas con dibujo y nombre.',w:'memoria visual, turnos, léxico de aves, nombrar al dar la vuelta a la carta.'},
  {k:'tar',img:'obj-nido',t:'Tarjetas del nido',d:'Ocho objetos con su palabra y una frase para pedirlo: «Dame la rama».',w:'vocabulario, peticiones, frases de dos y tres palabras.'},
  {k:'lab',img:'obj-pollito-pie',t:'Laberinto: del pollito al nido',d:'Un laberinto distinto cada vez, más fácil o más difícil según la edad.',w:'atención visual, planificación, instrucciones («sube», «gira», «para»).'},
  {k:'sil',img:'sil-golondrina',fondo:1,t:'¿Quién es? Aves y siluetas',d:'Recorta las cinco aves y pégalas sobre su silueta.',w:'discriminación visual, nombrar, describir rasgos (pico, cola, color).'},
  {k:'cont',img:'obj-huevo',t:'¿Cuántos huevos hay?',d:'Cinco filas con uno a cinco huevos. Rodea el número.',w:'contar, cuantificadores (uno, dos, muchos), frases con número.'},
  {k:'col',img:'colorear-nido',t:'Para colorear (4 dibujos)',d:'Nido con huevos, pájaro, pollito y golondrina. Cada uno, una hoja.',w:'grafomotricidad, colores, describir lo que pinta.'},
  {k:'juego',img:'obj-gusano',t:'Juego de mesa: el camino del pollito',d:'Tablero de 20 casillas. En las especiales hay que pedir, decir o soplar para avanzar. Se juega con un dado.',w:'peticiones, turnos, vocabulario, soplo, contar casillas.'}
 ],
 sec:{tit:'El huevo, el pollito y el vuelo',orden:['sec-3-pollito','sec-1-huevo','sec-4-vuelo','sec-2-cascara']},
 mem:{tit:'Memory de aves de aquí',sub:'Gorrión, paloma, gaviota, golondrina y cigüeña',items:[['gorrión','ave-gorrion'],['paloma','ave-paloma'],['gaviota','ave-gaviota'],['golondrina','ave-golondrina'],['cigüeña','ave-cigueña']]},
 tar:{tit:'Tarjetas del nido',items:[['la rama','rama','Dame la rama.','obj-rama'],['la pluma','pluma','Quiero la pluma.','obj-pluma'],['el pico','pico','Abre el pico.','obj-pico'],['el ala','ala','Mueve el ala.','obj-ala'],['la cáscara','cáscara','Mira la cáscara.','obj-cascara'],['el nido','nido','Pon el nido aquí.','obj-nido'],['el gusano','gusano','El pollito quiere el gusano.','obj-gusano'],['los huevos','huevos','Cuento tres huevos.','obj-huevos']]},
 lab:{tit:'Laberinto del pollito',sub:'Lleva al pollito hasta su nido',ini:'obj-pollito-pie',fin:'obj-nido'},
 sil:{tit:'¿Quién es?',items:[['gorrión','ave-gorrion','sil-gorrion'],['paloma','ave-paloma','sil-paloma'],['gaviota','ave-gaviota','sil-gaviota'],['golondrina','ave-golondrina','sil-golondrina'],['cigüeña','ave-cigueña','sil-cigueña']]},
 cont:{tit:'¿Cuántos huevos hay?',img:'obj-huevo',plural:'huevos'},
 col:[['colorear-nido','El nido con tres huevos'],['colorear-pajaro','El pájaro en su rama'],['colorear-pollito','El pollito'],['colorear-golondrina','La golondrina']],
 juego:{tit:'El camino del pollito',ficha:'obj-pollito-pie',meta:'obj-nido',metaTxt:'¡AL NIDO!',esp:{3:'a',5:'b',8:'c',10:'a',12:'b',15:'c',17:'b'},tipos:{a:['obj-rama','Pide: «Dame la rama». Avanza 1.'],b:['obj-gusano','Di: «El pollito quiere el gusano». Avanza 2.'],c:['obj-pluma','Sopla la pluma. Avanza 1.']}},
 manu:[
  {t:'Nido de papel con huevos de plastilina',img:'obj-nido',mat:'Un plato de cartón o un cuenco de papel, tiras de papel marrón y amarillo, pegamento, plastilina clara y rotulador marrón.',pasos:['Rompe o recorta tiras de papel.','Pégalas en espiral dentro del plato para hacer el nido.','Haz tres bolitas ovaladas de plastilina: son los huevos.','Píntales motas con el rotulador.','Colócalos en el nido y cuéntalos.'],dice:'«Quiero más papel.» «Pega la rama aquí.» «Hay tres huevos.»',w:'peticiones, secuencia de pasos, cuantificadores, motricidad fina.'},
  {t:'Pájaro con un rollo de cartón',img:'obj-rollo',mat:'Rollo de papel higiénico, tijeras, pegamento, papel de colores o la plantilla de abajo.',pasos:['Imprime la plantilla y píntala.','Recorta alas, pico, ojos y cresta.','Pega las alas a los lados del rollo.','Pega el pico y los ojos en el centro.','Haz que el pájaro vuele y diga lo que quiere.'],dice:'«Alas.» «Pico.» «El pájaro vuela.» «Tiene el pico naranja.»',w:'partes del cuerpo, adjetivos de color, descripción, pegar y recortar.',plantilla:true},
  {t:'Comedero con un brick',img:'obj-comedero',mat:'Un brick limpio, tijeras (las usa el adulto), cuerda, alpiste y un palo o cuchara de madera.',pasos:['El adulto corta una ventana en un lado del brick.','Se pasa el palo por dos agujeros como posadero.','Se hace un agujero arriba y se ata la cuerda.','El niño echa el alpiste con una cuchara.','Se cuelga en un árbol o balcón y se espera a que vengan.'],dice:'«Abre.» «Echo comida.» «Ya viene un pájaro.»',w:'órdenes de varios pasos, vocabulario, espera y turnos, observación.'},
  {t:'Pájaro de plato de papel',img:'sec-4-vuelo',mat:'Un plato de papel, papeles de colores, pegamento, tijeras, un palo de polo.',pasos:['Corta el plato por la mitad.','Una mitad será el cuerpo y la otra las alas.','Pega plumas de papel de colores en las alas.','Pega ojo y pico.','Pégalo a un palo de polo para hacerlo volar.'],dice:'«Primero corto.» «Luego pego.» «Al final, vuela.»',w:'secuencia (primero, luego, al final), colores, verbos de acción.'}
 ],
 acts:[
  {t:'Hacer un nido de verdad',d:'Ramitas, lana, algodón y huevos de plastilina. Que lo construya y diga qué pone en cada paso.',w:'vocabulario (rama, pluma, nido, huevo), peticiones («dame más ramitas»), motricidad fina.'},
  {t:'Dar de comer a los polluelos',d:'Vasos o cajas con pico de pájaro y gusanos de lana que se cogen con pinzas.',w:'colores, contar, turnos, primero y último, pinza.',e:[4,5,6]},
  {t:'Carreras de plumas',d:'Soplar una pluma por la mesa hasta la meta.',w:'soplo dirigido, control de la respiración, turnos.'},
  {t:'Imitar sonidos de aves',d:'Pío pío, cucú, el arrullo de la paloma. La app Merlin Bird ID trae grabaciones.',w:'discriminación auditiva, imitación, onomatopeyas.'},
  {t:'Salir a observar',d:'Prismáticos con dos rollos de cartón y un comedero con un brick y alpiste. Buscar nidos en los árboles, sin tocarlos.',w:'atención, vocabulario espontáneo, descripción de lo que ve.',e:[5,6,7]},
  {t:'Contar lo que se ha visto',d:'Al volver, dibujar un ave y dictar o escribir una frase: «He visto una… que estaba…».',w:'narración, frases con sujeto y verbo, conciencia fonológica al escribir.',e:[6,7]},
  {t:'Cuentos para leer juntos',d:'¿Eres tú mi mamá?, de P. D. Eastman, y Pájaro amarillo, de Olga de Dios.',w:'comprensión, preguntas y respuestas, vocabulario.'}
 ],
 lince:{t:'El Lince Digital, solo de pájaros',d:'El lince pide un dibujo y hay que encontrarlo en el tablero. Con voz. Esta partida lleva solo aves, el pollito y el huevo.',url:'https://foniafonia.github.io/el-lince-digital/?sel=19.1a.1b.1c.1d.1e.1f.1g.1h.1i.1j.1k.2k&dibujos=emoji&c=gen'}
},
otono:{
 imprimir:[
  {k:'sec',img:'sec-2-hoja-amarilla',t:'La hoja que cambia',d:'Cuatro viñetas: verde, amarilla, cae y ya está en el suelo. Para recortar y ordenar.',w:'orden temporal, narración (primero, luego, al final), colores, verbos (cambiar, caer).'},
  {k:'mem',img:'obj-castana',t:'Memory del otoño',d:'Castaña, seta, calabaza, ardilla y erizo. Cartas con dibujo y cartas con dibujo y nombre.',w:'memoria visual, turnos, léxico del otoño, nombrar al dar la vuelta a la carta.'},
  {k:'tar',img:'obj-paraguas',t:'Tarjetas del otoño',d:'Ocho cosas del otoño con su palabra y una frase para pedirlas o contarlas.',w:'vocabulario, peticiones, frases de dos y tres palabras.'},
  {k:'lab',img:'obj-ardilla',t:'Laberinto: la ardilla y su bellota',d:'Un laberinto distinto cada vez, más fácil o más difícil según la edad.',w:'atención visual, planificación, instrucciones («sube», «gira», «para»).'},
  {k:'sil',img:'sil-ardilla',fondo:1,t:'¿Quién es? Dibujos y siluetas',d:'Recorta los cinco dibujos y pégalos sobre su silueta.',w:'discriminación visual, nombrar, describir rasgos (color, forma, partes).'},
  {k:'cont',img:'obj-bellota',t:'¿Cuántas bellotas hay?',d:'Cinco filas con una a cinco bellotas. Rodea el número.',w:'contar, cuantificadores (una, dos, muchas), frases con número.'},
  {k:'col',img:'colorear-hoja',t:'Para colorear (4 dibujos)',d:'Hoja, ardilla, erizo y paraguas con botas. Cada uno, una hoja.',w:'grafomotricidad, colores, describir lo que pinta.'},
  {k:'juego',img:'obj-ardilla',t:'Juego de mesa: la ardilla va a su árbol',d:'Tablero de 20 casillas. En las especiales hay que pedir, decir o soplar para avanzar. Se juega con un dado.',w:'peticiones, turnos, vocabulario, soplo, contar casillas.'}
 ],
 sec:{tit:'La hoja que cambia',orden:['sec-3-hoja-cae','sec-1-hoja-verde','sec-4-hoja-suelo','sec-2-hoja-amarilla']},
 mem:{tit:'Memory del otoño',sub:'Castaña, seta, calabaza, ardilla y erizo',items:[['castaña','obj-castana'],['seta','obj-seta'],['calabaza','obj-calabaza'],['ardilla','obj-ardilla'],['erizo','obj-erizo']]},
 tar:{tit:'Tarjetas del otoño',items:[['la hoja','hoja','Recojo una hoja.','obj-hoja'],['la castaña','castaña','Quiero la castaña.','obj-castana'],['el paraguas','paraguas','Abre el paraguas.','obj-paraguas'],['las botas','botas','Ponte las botas.','obj-botas'],['la seta','seta','Mira la seta.','obj-seta'],['la calabaza','calabaza','La calabaza es grande.','obj-calabaza'],['la ardilla','ardilla','La ardilla come bellotas.','obj-ardilla'],['la lluvia','lluvia','Llueve mucho.','obj-lluvia']]},
 lab:{tit:'Laberinto de la ardilla',sub:'Lleva a la ardilla hasta su bellota',ini:'obj-ardilla',fin:'obj-bellota'},
 sil:{tit:'¿Quién es?',items:[['castaña','obj-castana','sil-castana'],['seta','obj-seta','sil-seta'],['calabaza','obj-calabaza','sil-calabaza'],['ardilla','obj-ardilla','sil-ardilla'],['erizo','obj-erizo','sil-erizo']]},
 cont:{tit:'¿Cuántas bellotas hay?',img:'obj-bellota',plural:'bellotas'},
 col:[['colorear-hoja','La hoja de arce'],['colorear-ardilla','La ardilla y su bellota'],['colorear-erizo','El erizo con una hoja'],['colorear-paraguas','El paraguas y las botas']],
 juego:{tit:'La ardilla va a su árbol',ficha:'obj-ardilla',meta:'obj-arbol',metaTxt:'¡AL ÁRBOL!',esp:{3:'a',5:'b',8:'c',10:'a',12:'b',15:'c',17:'b'},tipos:{a:['obj-castana','Pide: «Dame la castaña». Avanza 1.'],b:['obj-bellota','Di: «La ardilla quiere la bellota». Avanza 2.'],c:['obj-hoja','Sopla la hoja. Avanza 1.']}},
 manu:[
  {t:'Árbol de otoño con huellas',img:'man-arbol',mat:'Cartulina, papel marrón, pegamento, pintura de dedos naranja, roja y amarilla, un trapo para limpiarse.',pasos:['Recorta o rasga un tronco de papel marrón y pégalo en la cartulina.','Moja las yemas de los dedos en la pintura.','Estampa huellas en la copa: naranja, roja y amarilla.','Haz caer unas hojas: huellas sueltas por el suelo.','Deja secar y cuenta cuántas hojas hay de cada color.'],dice:'«Pinto rojo.» «Pongo una hoja.» «Hay tres hojas amarillas.»',w:'colores, cuantificadores, secuencia de pasos, motricidad fina y sensorial.'},
  {t:'Erizo con plato de papel',img:'man-erizo',mat:'Plato de papel, pintura marrón, pinzas de madera o tiras de papel marrón, pegamento, ojos de papel.',pasos:['Pinta el plato de marrón y déjalo secar.','Dóblalo por la mitad: es el cuerpo del erizo.','Pega o pinza los pinchos por la parte de arriba.','Pega los ojos y una naricita.','Que el erizo se esconda y salga.'],dice:'«Pincho.» «El erizo tiene pinchos.» «Está escondido.» «Ya sale.»',w:'vocabulario, descripción, verbos (esconder, salir), pinza.'},
  {t:'Collage de hojas secas',img:'man-collage',mat:'Hojas secas recogidas en el paseo, cartulina, pegamento, rotuladores.',pasos:['Salid a recoger hojas de distintas formas y colores.','Colócalas sobre la cartulina para formar un dibujo (un pájaro, una cara).','Pega cada hoja en su sitio.','Añade ojos y detalles con rotulador.','Cuenta el dibujo: qué es y qué hojas has usado.'],dice:'«Esta es grande.» «Esta es roja.» «Es un pájaro.»',w:'adjetivos (grande, pequeño, rojo), clasificar, narración, creatividad.'},
  {t:'Frotado de hojas',img:'man-frotado',mat:'Hojas secas, folios, ceras de colores sin papel (tumbadas).',pasos:['Pon una hoja debajo del folio.','Con la cera tumbada, frota encima.','Mira cómo aparece la hoja.','Repite con otras hojas y otros colores.','Pregunta: «¿Cuál es la grande?, ¿cuál tiene más picos?».'],dice:'«Frota.» «Sale la hoja.» «Es naranja.»',w:'verbos de acción, descripción, comparación (más, menos), grafomotricidad.'}
 ],
 acts:[
  {t:'Recoger hojas en el paseo',d:'Recoger hojas y clasificarlas por color, tamaño o forma. En casa, ponerlas en cajas.',w:'colores, tamaños, comparar, clasificar, vocabulario del paseo.'},
  {t:'Pisar hojas secas',d:'Pisar las hojas y decir qué suena: crac, crac. Pisar despacio y deprisa.',w:'onomatopeyas, discriminación auditiva, adverbios (despacio, deprisa).',e:[4,5,6]},
  {t:'Saltar charcos con botas',d:'Saltar los charcos: «salto», «salpico», «mojado». Con paraguas, si llueve.',w:'verbos de movimiento, vocabulario de la lluvia, frases cortas.'},
  {t:'La ardilla esconde las bellotas',d:'Esconder bellotas, castañas o piñas por la habitación y buscarlas con pistas: «debajo», «encima», «al lado».',w:'preposiciones de lugar, escucha de instrucciones, turnos.',e:[5,6,7]},
  {t:'Soplar hojas con una pajita',d:'Mover una hoja ligera por la mesa soplando con pajita o sin ella.',w:'soplo dirigido, control de la respiración, turnos.'},
  {t:'Probar frutas de otoño',d:'Uvas, granada, caqui, membrillo en dulce. El adulto asa las castañas. Hablar de sabores y texturas.',w:'adjetivos (dulce, blando, duro), verbos (pelar, probar), peticiones.',e:[5,6,7]},
  {t:'Contar lo que se ha visto',d:'Al volver, dibujar lo que más le ha gustado y dictar o escribir una frase: «He visto… y estaba…».',w:'narración, frases con sujeto y verbo, conciencia fonológica al escribir.',e:[6,7]}
 ],
 lince:{t:'El Lince Digital, de otoño',d:'El lince pide un dibujo y hay que encontrarlo en el tablero. Con voz. Esta partida lleva ardilla, erizo, hoja, lluvia, paraguas, uvas, maíz, trigo, árbol y nubes.',url:'https://foniafonia.github.io/el-lince-digital/?sel=1n.1o.1v.26.4e.5a.5k.5l.5t.5u.5v&dibujos=emoji&c=gen'}
}
};
