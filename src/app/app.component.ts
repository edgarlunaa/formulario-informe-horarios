import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})


export class AppComponent {
	title = 'DOMICILIO Y HORARIOS DONDE DESARROLLARÁ TAREAS DEL BENEFICIARIO'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-empresa',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos de la empresa:</h2></div>',
    },


    // EMPRESA

    {
      key: 'Empresa',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos de la empresa',
      },
      fieldArray: {
        fieldGroup: [
        {
          key: 'CUIT',
          type: 'input',
          templateOptions: {
            label: 'CUIT',
            placeholder: 'Ingrese el CUIT de la empresa',
            pattern: '\\d{11}',
            required: true,
          },
        },
        {
          key: 'Razón social',
          type: 'input',
          templateOptions: {
            label: 'Razón social',
            placeholder: 'Ingrese una razón social',
            required: true,
          },
        },
      ],
    },
  },

 //--------------------------------------------------------------------------------------------------------

  {
    className: 'datos-beneficiario',
    template: '<div><h2>Datos del beneficiario:</h2></div>',
  },

  {
    key: 'Beneficiario',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos del beneficiario',
    },
    fieldArray: {
      fieldGroup: [
      {
        key: 'CUIL',
        type: 'input',
        templateOptions: {
          label: 'CUIL',
          placeholder: 'Ingrese el CUIT de la empresa',
          pattern: '\\d{10,11}',
          required: true,
        },
      },
      {
        key: 'Apellido y Nombre',
        type: 'input',
        templateOptions: {
          label: 'Apellido y Nombre',
          placeholder: 'Ingrese un Apellido y Nombre',
          required: true,
        },
      },
    ],
  },
},

  //--------------------------------------------------------------------------------------------------------

  {
    className: 'datos-domicilio-practica',
    template: '<div><h2>Datos del Domicilio de la Práctica:</h2></div>',
  },
  {
    key: 'Domicilio de la Práctica',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar Domicilio',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'Responsable de contacto',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Responsable de contacto',
            placeholder: 'Ingrese un responsable'
          }
        },
        {
          key: 'Dirección',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Dirección',
            placeholder: 'Ingrese una Calle'
          }
        },
        {
          key: 'Piso',
          type: 'input',
          templateOptions:{
            label: 'Piso',
            pattern: '\\d{1,2}',
            placeholder: 'Ingrese un piso'
          }
        },
        {
          key: 'Depto',
          type: 'input',
          templateOptions:{
            label: 'Depto',
            placeholder: 'Ingrese un depto'
          }
        },
        {
          key: 'Localidad',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Localidad',
            placeholder: 'Ingrese una localidad'
          }
        },
        {
          key: 'CP',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'CP',
            pattern: '\\d{1,6}',
            placeholder: 'Ingrese un CP'
          }
        },
        {
          key: 'Email',
          type: 'input',
          templateOptions:{
            type: 'email',
            required: true,
            label: 'E-mail',
            placeholder: 'Ingrese un e-mail'
          }
        },
        {
          key: 'Teléfono',
          type: 'input',
          templateOptions:{
            label: 'Teléfono',
            pattern: '\\d{1,25}',
            placeholder: 'Ingrese un Telefono fijo'
          }
        },
        {
          key: 'Celular',
          type: 'input',
          templateOptions:{
            label: 'Celular',
            pattern: '\\d{1,25}',
            placeholder: 'Ingrese un Telefono Celular'
          }
        },
  ]}},


//-------------------------------------------------------------------------------------------------------

  {
    className: 'datos-tarea-a-realizar',
    template: '<div><h3>Tareas a realizar:</h3></div>',
  },
  {
    key: 'Tarea a realizar',
    type: 'no repeat',
    templateOptions:{
      addText: 'Insertar descripción'
    },
    fieldArray:{
      fieldGroup:[
        {
          key: 'Descripción de la tarea a realizar',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Descripción de la tarea a realizar',
            placeholder: 'Ingrese una tarea'
          }
        },
      ]
    }
  },
  
  //--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-dias-y-horarios',
    template: '<div><h2>Días y horarios de práctica</h2></div>',
  },
  {
    className: 'info-completar',
    template: '<div><h3>(Completar 20 horas semanales para beneficiarios por modalidad Entretenimiento)</h3></div>'
  },
  {
    key: 'Días y Horarios',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar Un día y un horario',
    },
    fieldArray: {
      fieldGroup: [  
        {
          key: 'Día',
          type: 'select',
          templateOptions:{
            label: 'Día',
            options:[
              {value: 'Lunes', label: 'Lunes'},
              {value: 'Martes', label: 'Martes'},
              {value: 'Miércoles', label: 'Miércoles'},
              {value: 'Jueves', label: 'Jueves'},
              {value: 'Viernes', label: 'Viernes'},
              {value: 'Sábado', label: 'Sábado'},
              {value: 'Domingo', label: 'Domingo'},
            ],
            required: true
          }
        },
        {
          key: 'Turno',
          type: 'select',
          templateOptions:{
            label: 'Turno',
            options:[
              {value: 'Mañana', label: 'Mañana'},
              {value: 'Tarde', label: 'Tarde'},
            ],
            required: true
          },
        },
        {
          key: 'Horario desde',
          type: 'input',
          templateOptions:{
            label: 'Horario desde (hs)',
            placeholder: 'Ingrese una hora',
            pattern: '\\d{1,2}',
            required: true
          }
        },
        {
          key: 'Horario hasta',
          type: 'input',
          templateOptions:{
            label: 'Horario hasta (hs)',
            placeholder: 'Ingrese una hora',
            pattern: '\\d{1,2}',
            required: true
          }
        }
      ]
    }
  },
]

  

	createPdf() {

  if (this.form.valid) {
    let modelo = Object.entries(this.model);
    //
    var doc = new jsPDF('p','mm','a4');

    doc.setFont('helvetica')

    let m = 5;
    let y = 0;
    let x = 15;
    let i = 0; //
    //var arr:JSON[];

    for (let seccion of modelo) {

      let arr: any = seccion[1];

      y = y + 6;
      doc.setFontSize(16);
      doc.setTextColor(45);
      doc.text(seccion[0], x, m + y); //nombre seccion
      doc.line(x, m + y + 1, x + 180, m + y + 1);



      for(var j = 0; j < arr.length;j++){
        
        //console.log(reg);
        var res = [];
        var z = 0;
        for(var clave in arr[j]){
          if (y > 240 && x === 110) {
            doc.addPage();
            m = 5;
            y = 0;
            x = 15;
          }
          i++;
          if (i % 2 != 0){x = 15; y = y + 12;}
          else {x = 110;}
          doc.setFontSize(10);
          doc.setDrawColor(100);

          res.push([clave, arr[j][clave]]);
          var registro:String[] = [clave, 'algo quee no se paso a string'];
          try {
            registro = res[z]; //paso los valores a string
          } catch (e) {
            console.log(e)
          }
          z++;
          doc.text(registro[1], x, m+y); //valor
          doc.line(x, m + y + 1, x + 90, m + y + 1); // linea horizontal
          doc.setFontSize(8);
          doc.setDrawColor(60);
          doc.text(clave, x, m + y + 5); //key
        }
      }
      i = 0;
      x = 15;
      y = y + 12;
    }
    let nombreArchivo = '00000000000';
    nombreArchivo = this.model['Beneficiario'][0]['CUIL'];
      doc.output('dataurlnewwindow');
      doc.save('solicitudCreditoL2' + nombreArchivo + '.pdf');


    } else (error) => {
        console.error('error:', error);
      } 
      if (this.form.invalid) {
        alert("falta completar datos")
      }
  }
}
