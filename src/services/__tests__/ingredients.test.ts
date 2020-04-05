import {findIngredients} from '../ingredients';

describe('service/ingredients', () => {
  it('should return the ingredients that match with with the ones of the database', () => {
    const recognizedText = `Protenas
    rasa Total ig 12T Grasa Satrada Grass Moncraati 4
    11 13
    1 99 Stamou Grasa Paat ( grasos trans a) colesterel (ngl
    H de Carbono Disp. (0 26,1
    Aricares toties ig
    Fbra Dlettica ()
    Fbra Solubie ig
    Fbra rsckubie ig 01
    421
    1 65 141 QUÍN
    OARAUCIRTE SOH 81
    106 5
    16
    3E
    458 43 31
    75
    879 Sodio im
    MINERALES
    Hlerro (mg)
    %en relación a la dosis diarla recomendada 372 + 153 77 559 INGREDIENTES: UN UN HEVO
    PREPARACIÓN Pan rallado integral, protelna vegetal texturizada, quínoa entera (20%), queso rallado, aceite (maravilla, soya), cebolla, zanahoria, sal de mnar, ajo, proteina hidrolizada de soya, cebollin, comino,
    extracto de levadura, ciboulette, perelil.
    Cúrcuma. Contiene leche (queso),
    gluten, soya. Elaborado en lineas
    que también procesan huevo, aplo,
    mostaza, sésamo, crustáceos,
    moluscos, almendras. 1 Vaciar el contanko del Mix para Hamburquesas e bowl y mezclar o 240 ml de agua
    callente y 1 huevo
    previamente batido FABRICADO EN CHILE POR GO00 FO00 SA Balmaceda 3050, Aefafioc, RM.
    Teléfong: 229478600, Aes, SERENM Salud
    RM. NP151347951 del 27.02 2015. 2 Dejar reposar por 15 minus SA AL. Ballvián, Esq, C15, Calacoto Tet
    2791122 Fax 2797242. NIT 1020541029.
    RS. SENASAG 04-05-03-19-0014. La Pu,
    Bolivia. IMPORTADO EN BOLIMIA POR KETAL 3 Dividir la mezca en 4 porciones y formar manualmente las
    hamburguesas y aRa Consersor en ksr Descutra más
    idoas inspiradoras en
    www.gourmet.ci eaOéa rgrr ee Homeara 15OPC por 15 minutas Conéctate con nosotros`
    
    const result = findIngredients(recognizedText);


  });
});