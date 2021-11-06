let radiologia = [
    {
      hora: "11: 00 ",
      especialista: "IGNACIO SCHULZ",
      paciente: "FRANCISCA ROJAS",
      rutina: "9878782-1",
      prevision: "FONASA"
    },
    {
      hora: "11: 30 ",
      especialista: "FEDERICO SUBERCASEAUX",
      paciente: "PAMELA ESTRADA",
      rutina: "15345241-3",
      prevision: "ISAPRE"
    },
    {
      hora: "15: 00 ",
      especialista: "FERNANDO WURTHZ",
      paciente: "ARMANDO LUNA",
      rutina: "16445345-9",
      prevision: "ISAPRE"
    },
    {
      hora: "15: 30 ",
      especialista: "ANA MARIA GODOY",
      paciente: "MANUEL GODOY",
      rutina: "17666419-0",
      prevision: "FONASA"
    },
    {
      hora: "16: 00 ",
      especialista: "PATRICIA SUAZO",
      paciente: "RAMON ULLOA",
      rutina: "14989389-K",
      prevision: "FONASA"
    }
  ];
  
  let traumatologia = [
    {
      hora: "8:00",
      especialista: "MARIA PAZ ALTUZARRA",
      paciente: "PAULA SANCHEZ",
      rut: "15554774-5",
      prevision: "FONASA"
    },
    {
      hora: "10:00",
      especialista: "RAUL ARAYA",
      paciente: "ANGÉLICA NAVAS",
      rut: "15444147-9",
      prevision: "ISAPRE"
    },
    {
      hora: "10:30",
      especialista: "MARIA ARRIAGADA",
      paciente: "ANA KLAPP",
      rut: "17879423-9",
      prevision: "ISAPRE"
    },
    {
      hora: "11:00",
      especialista: "ALEJANDRO BADILLA",
      paciente: "FELIPE MARDONES",
      rut: "1547423-6",
      prevision: "ISAPRE"
    },
    {
      hora: "11:30",
      especialista: "CECILIA BUDNIK",
      paciente: "DIEGO MARRE",
      rut: "16554741-K",
      prevision: "FONASA"
    },
    {
      hora: "12:00",
      especialista: "ARTURO CAVAGNARO",
      paciente: "CECILIA MENDEZ",
      rut: "9747535-8",
      prevision: "ISAPRE"
    },
    {
      hora: "12:30",
      especialista: "ANDRES KANACRI",
      paciente: "MARCIAL SUAZO",
      rut: "11254785-5",
      prevision: "ISAPRE"
    }
  ];
  
  let dental = [
    {
      hora: "8:30",
      especialista: "ANDREA ZUÑIGA",
      paciente: "MARCELA RETAMAL",
      rut: "11123425-6",
      prevision: "ISAPRE"
    },
    {
      hora: "11:00",
      especialista: "MARIA PIA ZAÑARTU",
      paciente: "ANGEL MUÑOZ",
      rut: "9878789-2",
      prevision: "ISAPRE"
    },
    {
      hora: "11:30",
      especialista: "SCARLETT WITTING",
      paciente: "MARIO KAST",
      rut: "7998789-5",
      prevision: "FONASA"
    },
    {
      hora: "13:00",
      especialista: "FRANCISCO VON TEUBER",
      paciente: "KARIN FERNANDEZ",
      rut: "18887662-K",
      prevision: "FONASA"
    },
    {
      hora: "13:30",
      especialista: "EDUARDO VIÑUELA",
      paciente: "HUGO SANCHEZ",
      rut: "17665461-4",
      prevision: "FONASA"
    },
    {
      hora: "14:00",
      especialista: "RAQUEL VILLASECA",
      paciente: "ANA SEPULVEDA",
      rut: "14441281-0",
      prevision: "ISAPRE"
    }
  ];
  
  // Radiologia
  const atenciones = (data, id) => {
    let content = `Primera atención: ${data[0].paciente} - ${
      data[0].prevision
    } | Última atención: ${data[data.length - 1].paciente} - ${
      data[data.length - 1].prevision
    }`;
  
    document.getElementById(id).innerHTML = content;
  };
  
  atenciones(radiologia, "consultas-radiologia");
  atenciones(traumatologia, "consultas-traumatologia");
  atenciones(dental, "consultas-dental");
  
  const generarTabla = (data, id) => {
    let table = document.getElementById(id);
    for (let i = 0; i < data.length; i++) {
      let row = document.createElement("tr");
      let content = `
       <td>${data[i].hora}</td>
       <td>${data[i].especialista}</td>
       <td>${data[i].paciente}</td>
       <td>${data[i].rut}</td>
       <td>${data[i].prevision}</td>
    `;
      row.innerHTML = content;
  
      table.appendChild(row);
    }
  };
  generarTabla(radiologia, "tabla-radiologia");
  generarTabla(traumatologia, "tabla-traumatologia");
  generarTabla(dental, "tabla-dental");
  