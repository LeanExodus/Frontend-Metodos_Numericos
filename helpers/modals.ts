import Swal, { SweetAlertResult } from 'sweetalert2';


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
		html:
		`<ul>
		<li>Para el campo de la función se tiene que tomar en cuenta:<br>
		   Al querer multiplicar por x se debe ingresar el símbolo * antes de la x<br>
		   Para ingresar una raíz cuadrada se usa sqrt(<i>Numero al cual queremos sacar la raiz</i>)</li>
		<li>Para los campos del intervalo:<br>
		    Estos campos no son requeridos, ya que si no se ingresan la aplicación calculará el intervalo mediante Bolzano<br>
		    Si vas a ingresarlos, procura que entre esos puntos exista una raíz, de lo contrario no se calculará</li>
		<li>El campo de la tolerancia:<br>
		    Este campo determina el nivel de precisión requerida<br>
		    Se recomienda usar valores cercanos a 0<br>
		    No se admiten valores negativos.</li>
	  </ul>`,
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