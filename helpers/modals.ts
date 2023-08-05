import Swal, { SweetAlertResult } from 'sweetalert2';

let htmlContent = `<ul>
<li><b>Para el campo de la función se tiene que tomar en cuenta:</b><br>
&nbsp;&nbsp;&nbsp;&#8226 Al querer multiplicar por x se debe ingresar el símbolo * antes de la x<br>
&nbsp;&nbsp;&nbsp;&#8226 Para ingresar una raíz cuadrada se usa sqrt(<i><b>Numero al cual queremos sacar la raiz</b></i>)</li>
<li><b>Para los campos del intervalo:</b><br>
&nbsp;&nbsp;&nbsp;&#8226 <i> Estos campos no son requeridos</i>, ya que si no se ingresan la aplicación calculará el intervalo mediante Bolzano<br>
&nbsp;&nbsp;&nbsp;&#8226 Si vas a ingresarlos, procura que entre esos puntos exista una raíz, de lo contrario no se calculará</li>
<li><b>El campo de la tolerancia:</b><br>
&nbsp;&nbsp;&nbsp;&#8226 Este campo determina el nivel de precisión requerida<br>
&nbsp;&nbsp;&nbsp;&#8226 Se recomienda usar valores cercanos a 0<br>
&nbsp;&nbsp;&nbsp;&#8226 No se admiten valores negativos.</li>
</ul>`

let htmlContentNewton =

`<ul>
En este metodo puedes usar el intervalo o el valor inicial (<i>Si ya sabes el punto medio</i>)
<li><b>Para el campo de la función se tiene que tomar en cuenta:</b><br>
&nbsp;&nbsp;&nbsp;&#8226 Al querer multiplicar por x se debe ingresar el símbolo * antes de la x<br>
&nbsp;&nbsp;&nbsp;&#8226 Para ingresar una raíz cuadrada se usa sqrt(<i><b>Numero al cual queremos sacar la raiz</b></i>)</li>
<li><b>Para el campo de valor inicial:</b><br>
&nbsp;&nbsp;&nbsp;&#8226 <i> Este campo no es requerido </i><br>
&nbsp;&nbsp;&nbsp;&#8226 Este campo es dado por la suma de los puntos de intervalo divido entre 2 (<i>Punto Medio</i>)<br>
&nbsp;&nbsp;&nbsp;&#8226 Usalo solo si tienes conocimiento del punto medio o si el problema te lo indica</li>
<li><b>Para los campos del intervalo:</b><br>
&nbsp;&nbsp;&nbsp;&#8226 <i> Estos campos no son requeridos</i>, ya que si no se ingresan la aplicación calculará el intervalo mediante Bolzano<br>
&nbsp;&nbsp;&nbsp;&#8226 Si vas a ingresarlos, procura que entre esos puntos exista una raíz, de lo contrario no se calculará</li>
<li><b>El campo de la tolerancia:</b><br>
&nbsp;&nbsp;&nbsp;&#8226 Este campo determina el nivel de precisión requerida<br>
&nbsp;&nbsp;&nbsp;&#8226 Se recomienda usar valores cercanos a 0<br>
&nbsp;&nbsp;&nbsp;&#8226 No se admiten valores negativos.</li>
</ul>`

export const errorModal = (text: string) => {
	text = Array.isArray(text) ? text[0].error : text;

	Swal.fire({
		title: 'Error!',
		text: text.charAt(0).toUpperCase() + text.slice(1),
		icon: 'error',
		confirmButtonText: 'Ok',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const guideModal = () => {

	Swal.fire({
		html:htmlContent,
		icon: 'info',
		width: 1000,
		confirmButtonText: 'Entendido',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const guideModalNewton = () => {

	Swal.fire({
		html:htmlContentNewton,
		icon: 'info',
		width: 1000,
		confirmButtonText: 'Entendido',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const successModal = (text: string) => {
	Swal.fire({
		title: 'Éxito!',
		text: text.charAt(0).toUpperCase() + text.slice(1),
		icon: 'success',
		confirmButtonText: 'Ok',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const yesNoModal = async (
	text: string
): Promise<SweetAlertResult<any>> => {
	const result = Swal.fire({
		title: text,
		showCancelButton: true,
		confirmButtonText: 'Si',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
			cancelButton: 'modal-cancel-button',
		},
	});

	return result;
};